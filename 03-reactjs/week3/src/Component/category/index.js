import React, { Component } from 'react'
import {del, listCategories} from '../../crud/api/api-category'
import AddEditForm from './AddEditForm'
import TableCategory from './TableCategory'


export default class Category extends Component {
    state = {
        categories: [],
        isModalShow: false,
        dataEditRow : null,
    }
    
    showListCategories = () =>{
        listCategories().then(data=>{
            this.setState({
                categories: data,
            })
        })
    }

    componentDidMount(){
        this.showListCategories()
        // console.log(this.state.categories);
    }

    onShowModal = (value) => {
        this.setState({
            isModalShow: value
        })
        console.log(this.state.isModalShow)
    }

    onEditRow = (value)=>{

        this.setState({
            dataEditRow : value
        })
        this.onShowModal(true);
    }

    onDeleteRow = (value)=>{
        del(value).then(response => {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });;

        this.onRefreshTable();
    }

    onRefreshTable =()=>{
        this.showListCategories();
    }

    render() {
        return (
            <>
                <TableCategory categories={this.state.categories} 
                setShowModal={this.onShowModal}
                deleteRow={this.onDeleteRow}
                editRow={this.onEditRow} 
                />
                {
                    (this.state.isModalShow ? (
                     <AddEditForm 
                        setShowModal={this.onShowModal} 
                        setRefreshTable={this.onRefreshTable}
                        categories = {this.state.dataEditRow}
                    />
                    ) : null)
                } 
            </>
        )
    }
}
