import { defineFeature, loadFeature } from "jest-cucumber"
import { shallow, ShallowWrapper, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StoryDetail } from "../StoryDetail";

configure({adapter: new Adapter()});

const screenProps = {
    navigate: jest.fn(),
    id: "StoryDetail"
}

const feature = loadFeature('./src/app/screens/StoryDetail/__tests__/features/StoryDetail-scenarios.feature');

const postsData = [
    {
        title: '',
        url: '',
        created_at: '',
        author: ''
    }
]

defineFeature(feature, (test) => {

    test('User navigates Story Detail Screen', ({ given, when, then }) => {
        let StoryDetailScreenWrapper: ShallowWrapper;
        let StoryDetailScreenInstance: StoryDetail;

        given('I am a User loading Story Detail Screen', () => {
            StoryDetailScreenWrapper = shallow(<StoryDetail {...screenProps} />)
        });

        when('I navigate to the Story Detail Screen', () => {
            StoryDetailScreenInstance = StoryDetailScreenWrapper.instance() as StoryDetail
        });

        then('Story Detail Screen will load with out errors', () => {
            StoryDetailScreenInstance.componentDidMount();
            expect(StoryDetailScreenWrapper).toBeTruthy();
            StoryDetailScreenInstance.setState({ postsData: postsData });
            StoryDetailScreenInstance.onPressCellRow(postsData[0]);
            StoryDetailScreenInstance.onScroll({
                target: {
                    scrollHeight: 1000,
                    scrollTop: 100,
                    clientHeight: 1000,
                }
            })
            expect(StoryDetailScreenWrapper).toMatchSnapshot()
        });

        then('I can enter search input value for stories', () => {
            let inputComponent = StoryDetailScreenWrapper.findWhere((node) => node.prop("data-testid") === "textInputTestID");
            inputComponent.simulate('change', { preventDefault: jest.fn(), target: { value: 'abc' } });
        });
        
        then('I can select the clear filter buttons', () => {
            let buttonComponent = StoryDetailScreenWrapper.findWhere((node) => node.prop("data-testid") === "filterByCreatedAtButton");
            buttonComponent.simulate("click");
            buttonComponent = StoryDetailScreenWrapper.findWhere((node) => node.prop("data-testid") === "clearSearchAndFilterButton");
            buttonComponent.simulate("click");
            buttonComponent = StoryDetailScreenWrapper.findWhere((node) => node.prop("data-testid") === "filterByTitleAtButton");
            buttonComponent.simulate("click");
        });

        then('I can leave the screen with out errors', () => {
            StoryDetailScreenInstance.componentWillUnmount();
            expect(StoryDetailScreenWrapper).toBeTruthy()
            expect(StoryDetailScreenWrapper).toMatchSnapshot()
        });
    });

});
