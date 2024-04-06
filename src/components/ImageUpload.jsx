import React from 'react'
import { BiPlus } from 'react-icons/bi'
import FormAction from './FormAction';

const ImageUpload = () => {
    return (
        <div className='inline-flex  gap-4'>
            <div className='inline-flex items-center gap-3'>
                <FormAction text='Upload'/>
                <BiPlus />
            </div>
            <div className='h-24 w-24 bg-gray-200 rounded-md'>
            </div>
        </div>

    )
}

export default ImageUpload;