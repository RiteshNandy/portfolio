
import { SiMicrosoftazure } from 'react-icons/si'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import {DiGoogleAnalytics, DiReact} from 'react-icons/di'
import {FaServer, FaPython} from 'react-icons/fa'
import { Iservice } from './type'


export const services:Iservice[] = [

    {
        Icon: DiGoogleAnalytics,
        title: "Business Analyst",
        about: "skilled in <b>SQL, Excel (Macros) and Tableau</b>"

    },

    {
        Icon: FaPython,
        title: "Data Analyst",
        about: "Skilled in <b>Python, SQL, Oracle, Hadoop</b>"

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
        Icon: DiReact,
        title: "frontend Dev",
        about: "Skilled in <b>REACT, TS, JS, tailwindcss, HTML and CSS</b>"
    }

]