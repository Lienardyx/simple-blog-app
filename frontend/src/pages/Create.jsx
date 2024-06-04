import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadFile, createBlogs } from '../api/Api';

const Create = () => {


    const blankBlog = {
        "title":"",
        "image":"",
        "post":"",
        "category":""
    }

    const [newblog, setNewblog] = useState(blankBlog);

    const handleUpload = async (event) => {
        let uploadedFile = await uploadFile(event.target.files[0]);
        if(uploadedFile.path){
            setNewblog({...newblog,image:uploadedFile.path});
        }
    }

    const handleSubmit = async () => {
        let createdBlog = await createBlogs(newblog);
        if(createdBlog.desc == 1){
            setNewblog(blankBlog);
            alert("Blog berhasil ditambahkan");
        }
    }


    const menu = [
       {
            text: "Blogs",
            path: "/"
       },
       {
            text: "Sites",
            path: "/"
       },
       {
            text: "Diary",
            path: "/"
       },
    ]

  return (
    <div className="flex w-full items-center justify-center">
        <div className="bg-white w-[60%] p-5 rounded-xl">
            <h1 className="text-2xl mb-5">Create a Post</h1>
            <div className="flex flex-col">
                {/* <small>{JSON.stringify(newblog)}</small> */}
                <label htmlFor="" className="ml-1 text-gray-500">Title</label>
                <input type="text" value={newblog.title} onChange={(e) => setNewblog({...newblog,title:e.target.value})} className="h-10 border border-gray-300 rounded my-2 p-2" />
                <label htmlFor="" className="ml-1 text-gray-500">Category</label>
                <select value={newblog.category} onChange={(e) => setNewblog({...newblog,category:e.target.value})} name="" id="" className="h-10 border border-gray-300 rounded my-2 p-2">
                    <option value="" disabled>--Pilih Kategori--</option>
                    {menu.map(x => {
                        return <option value={x.text}>{x.text}</option>
                    })}
                </select>
                <label htmlFor="" className="ml-1 text-gray-500">Unggah Foto</label>
                <input onChange={(e) => handleUpload(e)}  type="file" className="my-2 p-2" /> 
                <label htmlFor="" className="ml-1 text-gray-500">Postingan</label>
                <ReactQuill className='rounded mb-2 mt-2 editingarea' theme="snow" value={newblog.post} onChange={(e) =>{setNewblog({...newblog,post:e})}} />
                <hr />
                <button onClick={() => handleSubmit()} className="bg-gray-500 text-white h-8 mt-2 rounded">Submit Post</button>
            </div>
        </div>
    </div>
  )
}

export default Create