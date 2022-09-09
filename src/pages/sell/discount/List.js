import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled, alpha, } from '@mui/material/styles';
import {
    Box, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel,
    Toolbar, Typography, Paper, Checkbox, IconButton, Tooltip, TableFooter,
} from '@mui/material';
import Sidebar from '../../../components/header/Sidebar';
import Footer from '../../../components/footer/Footer';
import { AiFillFileExcel } from 'react-icons/ai';
import { StyledTableRow, StyledTableCell } from '../../../components/Table';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { visuallyHidden } from '@mui/utils';
import { FaFileCsv, FaPrint, FaFilePdf } from 'react-icons/fa';
import { userStyle } from '../../PageStyle';
import $ from 'jquery';
import Discreate from './Create';
import Disedit from './Edit';



function createData(name, startsat, endsat, discountamount, priority, brand, category, products, location, action) {
    return {
        name,
        startsat,
        endsat,
        discountamount,
        priority,
        brand,
        category,
        products,
        location,
        action
    };
}

const rows = [
    createData('sample', 'sample', 'sample', 'sample', 'sample', 'sample', 'sample', 'sample', 'sample', '',),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'name', numeric: false, disablePadding: true, label: 'Name',
    },
    {
        id: 'startsat', numeric: true, disablePadding: false, label: 'Starts At',
    },
    {
        id: 'endsat', numeric: true, disablePadding: false, label: 'Ends At',
    },
    {
        id: 'discountamount', numeric: true, disablePadding: false, label: 'Discount Amount',
    },
    {
        id: 'priority', numeric: true, disablePadding: false, label: 'Priority',
    },
    {
        id: 'brand', numeric: true, disablePadding: false, label: 'Brand',
    },
    {
        id: 'category', numeric: true, disablePadding: false, label: 'Category',
    },
    {
        id: 'products', numeric: true, disablePadding: false, label: 'Products',
    },
    {
        id: 'location', numeric: true, disablePadding: false, label: 'Location',
    },
    {
        id: 'action', numeric: true, disablePadding: false, label: 'Action',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.secondary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                </Typography>
            )
            }
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        {/* <FilterListIcon /> */}
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const Discoutlisttable = () => {

    useEffect(() => {
        document.body.classList.add('unitbody');
    });

    //  JQUERY
    $(document).ready(function () {
        setTimeout(function () {
            $('#discounttable').DataTable({
                language: { search: '', searchPlaceholder: "Search..." },
                lengthMenu: [25, 50, 100, 200, 500, 1000],
            });
        }, 1000);
    });
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <Box>
            <Typography sx={userStyle.HeaderText}>Discount</Typography>
            <Box sx={userStyle.container}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography sx={userStyle.importheadtext}>All your discounts</Typography>
                    </Grid>
                    <Grid item xs={4}><Discreate /></Grid>
                </Grid>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer component={Paper}>
                    <Grid container sx={userStyle.gridcontainer}>
                        <Grid >
                            <Button sx={userStyle.buttongrp}><FaFileCsv />&ensp;Export to CSV&ensp;</Button>
                            <Button sx={userStyle.buttongrp}><AiFillFileExcel />&ensp;Export to Excel&ensp;</Button>
                            <Button sx={userStyle.buttongrp}><FaPrint />&ensp;Print&ensp;</Button>
                            <Button sx={userStyle.buttongrp}><FaFilePdf />&ensp;Export to PDF&ensp;</Button>
                        </Grid>
                    </Grid>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        id="discounttable"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <StyledTableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <StyledTableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </StyledTableCell>
                                            <StyledTableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.startsat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.endsat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.discountamount}</StyledTableCell>
                                            <StyledTableCell align="right">{row.priority}</StyledTableCell>
                                            <StyledTableCell align="right">{row.brand}</StyledTableCell>
                                            <StyledTableCell align="right">{row.category}</StyledTableCell>
                                            <StyledTableCell align="right">{row.products}</StyledTableCell>
                                            <StyledTableCell align="right">{row.location}</StyledTableCell>
                                            <StyledTableCell align="right">
                                                <Disedit />
                                                <Button sx={userStyle.buttondelete}><DeleteOutlineOutlinedIcon style={{ fontSize: 'large' }} />&ensp;Delete</Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    );
                                })}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colspan={11}>
                                    <Button sx={userStyle.btnDeactive}>Deactive Selected</Button>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

const Discoutlist = () => {
    return (
        <>
            <Box sx={{ display: 'flex', }} >
                <Sidebar />
                <Box sx={{ width: '100%', overflowX: 'hidden' }}>
                    <Box component="main" sx={{ padding: '30px', }}><br /><br />
                        <Discoutlisttable /><br /><br />
                        <Footer />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Discoutlist;