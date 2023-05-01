import { IconType } from 'react-icons'

export interface Iservice {
  title: string,
  about: string,
  Icon: IconType
}

export interface ISkill {
  name: string,
  level: string,
  Icon: IconType
}

export interface IProject {
  name: string,
  description: string,
  image_path:string,
  deployed_url:string,
  github_url:string,
  category:Category[],
  hashtags: string[]
}

export type Category = "tableau"|"excel"|"machine_learning"|"deep_learning"|"R";