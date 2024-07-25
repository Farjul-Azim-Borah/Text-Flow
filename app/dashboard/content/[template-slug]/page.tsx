"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import templates from '@/app/(data)/templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Link, Link2 } from 'lucide-react'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { Result } from 'postcss'

interface PROPS{
    params:{
        'template-slug': string
    }
}




function CreateNewContent(props:PROPS) {


    const selectedTemplate:TEMPLATE|undefined = templates?.find((item)=>item.slug==props.params['template-slug']);

    const [loading , setLoading] = useState(false);

    const [aiOutput, setAiOutput] = useState<string>('');

    const {user} = useUser();

    const GenerateAiContent = async(formData:any)=>{
        setLoading(true);
        const SelectedPrompt = selectedTemplate?.aiPrompt;
        const FinalAiPrompt = JSON.stringify(formData)+", "+SelectedPrompt;

        const result = await chatSession.sendMessage(FinalAiPrompt);

        setAiOutput(result?.response.text());
        await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
        setLoading(false);
    }
    
    const SaveInDb=async(formData:any,slug:any, aiResp:string)=>{
        const result= await db.insert(AIOutput).values({
            formData: formData,
            templateSlug:slug,
            aiResponse: aiResp,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createAt:moment().format('DD/MM/yyyy')
        })
        console.log(result);
    }

  return (
    <div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
            {/* Form Section */}

            <FormSection selectedTemplate = {selectedTemplate} userFormInput={(v:any)=>GenerateAiContent(v)} loading={loading}/>


            {/* Output section */}
            <div className='col-span-2'>
                <OutputSection aiOutput = {aiOutput}/>
            </div>
        </div>


    </div>

    
  )
}

export default CreateNewContent