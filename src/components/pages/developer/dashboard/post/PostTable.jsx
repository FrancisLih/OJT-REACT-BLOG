import React from 'react'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsActive, setIsAdd, setIsDelete } from '../../../../../store/StoreAction'

const PostTable = ({isLoading, isFetching, post, setItemEdit}) => {

    const {store, dispatch} = React.useContext(StoreContext)
    const [isArchiving, setIsArchiving] = React.useState(0);
    const [id, setId] = React.useState('')

    let counter = 1

    const handleArchive = (item) => {
        dispatch(setIsActive(true));
        setId(item.post_aid)
        setIsArchiving(0)
    }
    const handleRestore = (item) => {
        dispatch(setIsActive(true));
        setId(item.post_aid)
        setIsArchiving(1)
    }

    const handleDelete = (item) => {
        dispatch(setIsDelete(true))
        setId(item.post_aid)
    }
    const handleEdit = (item) => {
        dispatch(setIsAdd(true))
        setItemEdit(item)
    } 


  return (
    <>
    <div className="table-wrapper relative">
   {isFetching && <SpinnerFetching/>}
        <table>
            <thead>
                <tr >
                    <th className='w-[20px]'>#</th>
                    <th className='w-[150px]'>Name</th>
                    <th className='w-[80px]'>Email</th>
                    <th className='w-[100px]'>Action</th>
                </tr>
            </thead>
            <tbody>
            {isLoading && ( 
                    <tr>
                        <td colSpan={9}>
                            <TableLoader count="20" cols="4"/>
                        </td>
                    </tr>)
                    }

                    {post?.data.length === 0 && (
                        <tr>
                            <td colSpan={9}>
                                <NoData/>
                            </td>
                        </tr>
                    )}
                
                    {post?.data.map((item,key)=>(
                         <tr key={key}>
                         <td>{counter++}</td>
                         <td>{item.post_name}</td>
                         <td>{item.post_email}</td>
                         <td className='table-action'>
                         <ul>
                             {item.post_is_active ? (
                                 <>
                                     <li><button onClick={()=>handleEdit(item)} className="tooltip" data-tooltip="Edit"><LiaEdit/></button></li>
                                     <li><button onClick={()=>handleArchive(item)} className="tooltip" data-tooltip="Archive"><PiArchive /></button></li>
                                 </>
                             ) : (
                                 <>
                                 <li><button onClick={()=>handleRestore(item)} className="tooltip" data-tooltip="Restore" ><LiaHistorySolid/></button></li>
                                 <li><button onClick={()=>handleDelete(item)} className="tooltip" data-tooltip="Delete"><LiaTrashAltSolid/></button></li></>
                             )}
                         </ul>
                         </td>
                     </tr>
                    ))
                }     
                                     
                    
            </tbody>
        </table>
    </div>
    {store.isActive && <ModalConfirm position="center" queryKey="post" endpoint={`/v1/post/active/${id}`} isArchiving={isArchiving}/>}
    {store.isDelete && <ModalDelete position="center" queryKey="post" endpoint={`/v1/post/${id}`} />}
    </>
  )
}

export default PostTable