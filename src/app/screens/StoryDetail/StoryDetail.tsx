import React, { Component, useRef } from 'react';
import './StoryDetail.css';
import WithRouter from '../../../WithRouter';
import { fetchPostsRequest } from '../../Utils/Fetch';

export interface Props {
    navigate: any;
    id: string;
}

interface S {
    postsData: any;
    originalPostsData: any;
    pageCount: number;
    limit: number;
    loading: boolean;
    pageLoader: boolean;
    pullToRefresh: boolean;
    onEndReachedCalledDuringMomentum: boolean;
    lastLoadCount: number;
    showEmptyView: boolean;
    notFinalLoad: any;
    isFilterCreatedAt: boolean;
    isFilterTitle: boolean;
    intervalId: any
    searchText: string
}

interface SS {
    id: any;
}

class StoryDetail extends Component<Props, S, SS> {
    intervalId: any;
    listInnerRef: any;
    constructor(props: any) {
        super(props);
        this.state = {
            postsData: [],
            originalPostsData: [],
            pageCount: 0,
            limit: 20,
            loading: true,
            pageLoader: false,
            pullToRefresh: false,
            onEndReachedCalledDuringMomentum: true,
            lastLoadCount: 0,
            showEmptyView: false,
            notFinalLoad: null,
            isFilterCreatedAt: false,
            isFilterTitle: false,
            intervalId: null,
            searchText: ''
        };
        this.intervalId = null;
        this.listInnerRef = null;
    };

    componentDidMount = async () => {
        this.fetchStoryData();
        window.addEventListener("scroll", this.onScroll, false);
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.onScroll, false);
    }

    fetchStoryData = () => {
        this.fetchPostsRequest();
        this.intervalId = setInterval(() => {
            /* istanbul ignore next */
            this.setState({ pageCount: this.state.pageCount + 1 }, () => {
                this.fetchPostsRequest();
            });
        }, 10000);
    }

    //*> Fetch Story Data
    fetchPostsRequest = async () => {
        try {
            let json = await fetchPostsRequest(this.state.pageCount);
            this.setState({
                postsData: this.state.postsData.concat(json.hits),
                originalPostsData: this.state.originalPostsData.concat(json.hits),
                pageLoader: false,
                lastLoadCount: this.state.postsData.concat(json.hits).length,
                onEndReachedCalledDuringMomentum:
                    this.state.postsData.concat(json.hits).length >= this.state.limit
                        ? true
                        : false,
                notFinalLoad:
                    this.state.postsData.concat(json.hits).length >= this.state.limit
                        ? true
                        : false,
            });
        } catch (error) {
        }
    };

    //*> On End Reached of the List Fetch data again
    /* istanbul ignore next */
    onEndReached = () => {
        if (
            this.state.lastLoadCount >= this.state.limit &&
            this.state.notFinalLoad
        ) {
            this.setState(
                {
                    pageLoader: true,
                    pageCount: this.state.pageCount + 1,
                },
                () => {
                    // Then we fetch more data;
                    this.fetchPostsRequest();
                }
            );
        }
    };

    //*> On Navigate to story detail screen
    onPressCellRow = (item: any) => {
        this.props.navigate(`/componentJson`, { state: { rawData: item } });
    };

    filterByCreatedAt = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        let localJsonData = this.state.originalPostsData
        const sortByDate = (localJsonData: any) => {
            const sorter = (a: any, b: any) => {
                /* istanbul ignore next */
                return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
            }
            localJsonData.sort(sorter);
        };
        sortByDate(localJsonData);
        this.setState({ postsData: localJsonData }, () => {
        })
    }

    /* istanbul ignore next */
    filterByTitle = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        let localJsonData = this.state.originalPostsData
        localJsonData.sort(function (a: any, b: any) {
            let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
            if (nameA < nameB) { return -1; }
            if (nameA > nameB) { return 1; }
            return 0;
        });
        this.setState({ postsData: localJsonData }, () => {
        })
    }

    clearFilters = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.setState({ searchText: '', postsData: [], originalPostsData: [] }, () => {
            this.fetchStoryData();
        });
    }
    
    /* istanbul ignore next */
    getSearchData(text: any) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        let localdetail: any = this.state.originalPostsData;
        const newData = localdetail.filter(function (item: any) {
            const itemData = item.title.toLowerCase() + item.url + item.author.toLowerCase();
            const textData = text.toLowerCase()
            return itemData.toString().indexOf(textData) > -1
        });
        if (this.state.searchText.trim().length === 0) {
            this.setState({ postsData: this.state.originalPostsData });
        } else {
            this.setState({ postsData: newData });
        }
    }

    handleChangeTextInput = (event: any) => {
        event?.preventDefault();
        this.setState({ searchText: event.target.value }, () => {
            this.getSearchData(event.target.value)
        });
    }

    onScroll = (e: any) => {
        const bottom = (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) || (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight - 0.5);
        if (bottom) {
            this.onEndReached();
        }
    };

    renderSearch = () => {
        return (
            <div className="formBox">
                <p className="headingText">Story JSON App</p>
                <input data-testid="textInputTestID" type="text" placeholder='Search' className='textInputField' value={this.state.searchText} onChange={(event) => this.handleChangeTextInput(event)} />
            </div>
        )
    }

    renderFilterNSearch = () => {
        return (
            <div className="filterContainer">
                <button data-testid="filterByCreatedAtButton" onClick={() => this.filterByCreatedAt()} className="filterButtons">
                    <p className="buttonText">Filter_by{'\n'}created_at</p>
                </button>
                <button data-testid="clearSearchAndFilterButton" onClick={() => this.clearFilters()} className="filterButtons">
                    <p className="buttonText">Clear Search and Filter</p>
                </button>
                <button data-testid="filterByTitleAtButton" onClick={() => this.filterByTitle()} className="filterButtons">
                    <p className="buttonText">Filter_by{'\n'}title</p>
                </button>
            </div>
        )
    }

    renderPostsListData = () => {
        return (
            <div onScroll={this.onScroll} className="listContainer">
                {this.state.postsData.map((item: any) => {
                    return (
                        <button key={item.title} onClick={() => this.onPressCellRow(item)} className="cellContainer">
                            <p className="dataKey">Title: {item.title}</p>
                            <p className="dataKey">URL: {item.url}</p>
                            <p className="dataKey">Created at: {item.created_at}</p>
                            <p className="dataKey">Author: {item.author}</p>
                        </button>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div className='mainContainer'>
                {this.renderSearch()}
                {this.renderFilterNSearch()}
                {this.renderPostsListData()}
            </div>
        )
    }
};

export default WithRouter(StoryDetail);
export { StoryDetail };
