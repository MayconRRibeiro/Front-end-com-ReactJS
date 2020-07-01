import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);

  //Recebe 2 parâmetros
  //1. Qual função quero disparar
  //2. Quando eu quero disparar essa função
  // 2.1 [] => disparado somente uma vez assim que o componente for exibido em tela.
  // 2.2 [projects] => dispara essa função sempre que a váriavel projects sofrer alteração.
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Mike Ribeiro'      
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title='Projects'></Header>

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
