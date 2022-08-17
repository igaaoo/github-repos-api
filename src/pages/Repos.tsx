import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import '../styles/Repos.css'

export function Repos() {
  type Repository = {
    name: string
    description: string
    html_url: string
    created_at: string
  }

  const params = useParams()
  const currentUser = params['*'] as string

  const {
    data: repositories,
    isFetching,
    owner,
  } = useFetch<Repository[]>(`https://api.github.com/users/${currentUser}/repos`)

  return (
    <div className="main">
      {isFetching && <h2>Loading...</h2>}
      <h1>{owner}'s Repositories</h1>

      {repositories?.map(repo => {
        return (
          <section onClick={() => window.open(repo.html_url)}>
            <h3>{repo.name} </h3>
            <p className="desc">
              {repo.description == null ? 'No description' : repo.description}
            </p>
            <p className="date">
              <i>{repo.created_at.slice(0, 9)}</i>
            </p>
          </section>
        )
      })}
    </div>
  )
}
