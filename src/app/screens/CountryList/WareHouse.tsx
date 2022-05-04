import React, { useState, useEffect } from 'react'
import { Select, MenuItem, Checkbox, Button } from '@mui/material';
import DropdownMenu from 'react-bootstrap/esm';

export let handleChange: any;
export let onAccessSelectionChange: any;

const WareHouse = () => {
    const [checkedData, setCheckedData] = useState<any>([]);
    const [checkBoxData, setCheckBoxData] = useState<any>({});
    const [userSelected, setUserSelected] = useState<any>('Employee');
    const data: any = [
        {
            key: '1',
            displayName: 'Employee',
            checkboxObject: [
                { label: 'Upload Site', value: false },
                { label: 'Delete Site', value: false },
                { label: 'View actvity', value: false }
            ]
        },
        {
            key: '2',
            displayName: 'Manager',
            checkboxObject: [
                { label: 'Upload Site', value: false },
                { label: 'Delete Site', value: false },
                { label: 'View actvity', value: false }
            ]
        },
        {
            key: '3',
            displayName: 'Driver',
            checkboxObject: [
                { label: 'Upload Site', value: false },
                { label: 'Delete Site', value: false },
                { label: 'View actvity', value: false }
            ]
        },
        {
            key: '4',
            displayName: 'Operator',
            checkboxObject: [
                { label: 'Upload Site', value: false },
                { label: 'Delete Site', value: false },
                { label: 'View actvity', value: false }
            ]
        },
        {
            key: '5',
            displayName: 'Leader',
            checkboxObject: [
                { label: 'Upload Site', value: false },
                { label: 'Delete Site', value: false },
                { label: 'View actvity', value: false }
            ]
        }
    ];

    onAccessSelectionChange = (event: any) => {
        setUserSelected(event.target.value);
        const checkboxDataIndex = checkedData.findIndex(
            (checkedItem: any) => String(checkedItem.displayName) === String(event.target.value)
        );
        setCheckBoxData(checkedData[checkboxDataIndex]);
    };

    useEffect(() => {
        setCheckedData(data);
        setCheckBoxData(data[0]);
    }, []);

    handleChange = (event: any, item: any) => {
        const tempCheckedBoxData = [...checkBoxData?.checkboxObject];
        const checkboxDataIndex = tempCheckedBoxData?.findIndex(
            (checkedItem: any) => checkedItem.label === item?.label
        );
        tempCheckedBoxData[checkboxDataIndex].value = !tempCheckedBoxData[checkboxDataIndex].value;
        const tempItem = { ...checkBoxData };
        tempItem.checkboxObject = tempCheckedBoxData;
        setCheckBoxData(tempItem);
        const tempCheckedData = checkedData;
        const checkedDataIndex = checkedData?.findIndex(
            (checkedItem: any) => checkedItem.displayName === checkBoxData.displayName
        );
        tempCheckedData[checkedDataIndex] = tempItem;
        setCheckedData(tempCheckedData);
    };

    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userSelected}
                label="Display"
                onChange={onAccessSelectionChange}
            >
                {checkedData?.map((item: any) => {
                    return (
                        <MenuItem value={item.displayName}>{item.displayName}</MenuItem>
                    )
                })}
            </Select>

            {checkBoxData?.checkboxObject?.map((item: any) => {
                return (
                    <>
                        <Checkbox
                            color="primary"
                            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                            onChange={(e) => handleChange(e, item)}
                            value={item.value}
                            name={item.label}
                            checked={item.value}
                        />
                        <label>{item.label}</label>
                    </>
                );
            })}
        </div>
    )
}

export default WareHouse
