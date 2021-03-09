  
import React, { useEffect, useState } from 'react';
import { create, update } from '../../crud/api/api-category';

const AddEditForm = (props) => {

    const initForm = { cate_id: null, cate_name: '' }
    const [category, setcategory] = useState(initForm);
    const [isedit, setisedit] = useState(false)

    useEffect(() => {
        if(props.categories !== null){
            setcategory(props.categories)
            setisedit(true)
        }
    }, [])

    const handleOnChange = e =>{
        let updateChange = {...category}         
        updateChange[e.target.name] = e.target.value
        setcategory(updateChange)
      }

    const handleOnSubmit = e => {
        e.preventDefault();
    //     const { name, value } = e.target;
    //    setcategory({...category, [name]:value});
       if(isedit){
            update(category).then(response => {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });;
       }else{
            create(category).then(response => {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });;
       }
        props.setShowModal(false);
        props.setRefreshTable();
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                                Add Edit Category
                                </h6>
                            <button onClick={() => {
                                props.setShowModal(false)
                                setcategory(initForm)}}
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"

                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                    </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form onSubmit={handleOnSubmit}>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                category Id
                                             </label>
                                            <input disabled
                                                type="text"
                                                name="cate_id"
                                                value={category.cate_id}
                                                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-xs shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                category Name
                                            </label>
                                            <input
                                                type="text"
                                                name="cate_name"
                                                value={category.cate_name}
                                                onChange={handleOnChange}
                                                className="uppercase px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button onClick={() => {
                                        props.setShowModal(false)
                                        setcategory(initForm)}}
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        Close
                                </button>
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                    >
                                        Save Changes
                                </button>
                                </div>
                            </form>


                        </div>

                    </div>

                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default AddEditForm