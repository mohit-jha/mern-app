/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    label: {
        display: 'block',
    },
    input: {
        width: 200,
    },
    listbox: {
        width: 200,
        margin: 0,
        padding: 0,
        zIndex: 1,
        position: 'absolute',
        listStyle: 'none',
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        maxHeight: 200,
        border: '1px solid rgba(0,0,0,.25)',
        '& li[data-focus="true"]': {
            backgroundColor: '#4a8df6',
            color: 'white',
            cursor: 'pointer',
        },
        '& li:active': {
            backgroundColor: '#2977f5',
            color: 'white',
        },
    },
}));

export default function FilterItems(props) {
    const [value, setvalue] = useState()


    const classes = useStyles();
    const {
        getRootProps,
        getInputLabelProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        groupedOptions,
    } = useAutocomplete({
        id: 'use-autocomplete-demo',
        options: props.items,
        getOptionLabel: (option) => option.name,
    });

    return (
        <>
            <div>

                <div {...getRootProps()}>

                    <input className={classes.input} {...getInputProps()} />
                </div>
                <div className='searchresult'>

                    {groupedOptions.length > 0 ? (
                        <ul className={classes.listbox} {...getListboxProps()}>
                            {groupedOptions.map((option, index) => (
                                <li {...getOptionProps({ option, index })}>{option.name}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>

            <div className='sortbtn'>
                Sort{' '}
                <div>

                    <ExpandLessIcon onClick={props.handleClick1} className="btna" value='accending' />
                </div>

                <div >

                    <ExpandMoreIcon onClick={props.handleClick2} className="btnb" value='decending' />
                </div>


            Date{' '}
                <div>

                    <ExpandLessIcon onClick={props.handleClick3} className="btna" value='accending' />
                </div>

                <div >

                    <ExpandMoreIcon onClick={props.handleClick4} className="btnb" value='decending' />
                </div>


            </div>
        </>
    );
}

