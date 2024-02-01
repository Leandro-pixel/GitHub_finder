import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { RepoProps } from "../types/repo"

import BackBtn from "../components/BackBtn"
import Loader from "../components/Loader"
import Repo from "../components/Repo"

import classes from "./Repos.module.css"
//import { GrUserWorker } from "react-icons/gr"

const Repos = () => {

    const {username} = useParams();//a hook useparams ta pegando um objeto com todos os parametros da URL e setamos usename como um deles
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null)

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        const loadRepos =async function (username: string) {
            const res = await fetch(`https://api.github.com/users/${username}/repos`)

            const data = await res.json()

            setIsLoading(false)

            let orderedRepos = data.sort((a: RepoProps, b: RepoProps) => b.stargazers_count - a.stargazers_count
            );

            orderedRepos = orderedRepos.slice(0, 5)

            setRepos(orderedRepos)
            
        }
        if(username) {
            loadRepos(username)
        }

    }, [])

    if(!repos && isLoading) return <Loader />

  return (
    <div className={classes.repos}>
        <BackBtn/>
        <h2>Explore the repositories from the user: {username}</h2>
        {repos && repos.length === 0 && <p>There's no repository</p>}
        {repos && repos.length > 0 && (
            <div className={classes.repos_container}>
                {repos.map((repo: RepoProps) =>(
                    <Repo key={repo.name} {...repo}/*spread para fazer match com as propriedades solicitadas*//>
                ) )}
            </div>
        )}

    </div>
  )
}

export default Repos