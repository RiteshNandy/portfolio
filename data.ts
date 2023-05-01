
import { SiMicrosoftazure } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import {DiGoogleAnalytics} from 'react-icons/di'
import {FaServer} from 'react-icons/fa'
import { BsCircleFill } from "react-icons/bs";
import { IProject, Iservice, ISkill } from './type'


export const services:Iservice[] = [

    {
        Icon: DiGoogleAnalytics,
        title: "Data/Business Analyst",
        about: "skilled in <b>SQL, Oracle, Excel (Macros), Python, Hadoop and Tableau</b>"

    },

    {
        Icon: SiMicrosoftazure,
        title: "Azure Cloud Engineer",
        about: "<b>Certified Experienced</b> Azure Engineer, completed multiple <b>migrations</b>"        
    },

    {
        Icon: AiOutlineConsoleSql,
        title: "SQL DBA",
        about: "SQL DBA with 2+ years of experience"

    },
    
    {
        Icon: FaServer,
        title: "DevOps Engineer",
        about: "skilled in <b>Jenkins,Docker,Git, Terraform, Kubernetes, AKS</b>"        
    },
    
    {
        Icon: AiOutlineConsoleSql,
        title: "SQL DBA",
        about: "SQL DBA with 2+ years of experience"

    },
    
    {
        Icon: FaServer,
        title: "DevOps Engineer",
        about: "skilled in <b>Jenkins,Docker,Git, Terraform, Kubernetes, AKS</b>"        
    }

]

export const languages:ISkill[] = [
    {
        Icon: BsCircleFill,
        name:'Python',
        level:'70%'        
    },
    {
        Icon: BsCircleFill,
        name:'Python',
        level:'60%'        
    },
    {
        Icon: BsCircleFill,
        name:'Python',
        level:'85%'        
    },
    {
        Icon: BsCircleFill,
        name:'Python',
        level:'90%'        
    },
    {
        Icon: BsCircleFill,
        name:'Python',
        level:'95%'        
    },
    {
        Icon: BsCircleFill,
        name:'Python',
        level:'80%'        
    }

]

export const tools:ISkill[] = [
    {
        Icon: BsCircleFill,
        name:'Jenkins',
        level:'70%'        
    },
    {
        Icon: BsCircleFill,
        name:'Kubernetes',
        level:'60%'        
    },
    {
        Icon: BsCircleFill,
        name:'Terraform',
        level:'85%'        
    }

]

export const projects:IProject[] = [
    {
        name: "sdf",
        description: "string",
        image_path:"string",
        deployed_url:"string",
        github_url:"string",
        category:["excel"],
        hashtags: ["tableau"]
    },

    {
        name: "sdzxcvasdf",
        description: "string",
        image_path:"string",
        deployed_url:"string",
        github_url:"string",
        category:["tableau"],
        hashtags: ["excel"]
    },

    {
        name: "sugdfasdf",
        description: "string",
        image_path:"string",
        deployed_url:"string",
        github_url:"string",
        category:["tableau"],
        hashtags: ["tableau"]
    },

    {
        name: "sasdfadf",
        description: "string",
        image_path:"string",
        deployed_url:"string",
        github_url:"string",
        category:["machine_learning"],
        hashtags: ["machine_learning"]
    },

    {
        name: "sddcvzxf",
        description: "string",
        image_path:"string",
        deployed_url:"string",
        github_url:"string",
        category:["excel"],
        hashtags: ["tableau"]
    },

    {
        name: "sdawef",
        description: "string",
        image_path:"string",
        deployed_url:"string",
        github_url:"string",
        category:["deep_learning"],
        hashtags: ["deep_learning"]
    },

    {
        name: "sdsdff",
        description: "string",
        image_path:"string",
        deployed_url:"string",
        github_url:"string",
        category:["R"],
        hashtags: ["R"]
    },
]