import { useFetch } from './hooks/useFetch'
import { useEffect, useState } from 'react'
import './styles/App.css'

type Repository = {
  name: string
  description: string
  html_url: string
  created_at: string
}

function App() {
  const {
    data: repositories,
    isFetching,
    owner,
  } = useFetch<Repository[]>('https://api.github.com/users/igorNeves007/repos')

  return (
    <div className="main">
      {isFetching && <li>Loading...</li>}
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

export default App
