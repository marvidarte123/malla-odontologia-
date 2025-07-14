body {
  font-family: 'Segoe UI', sans-serif;
  background: #fefefe;
  margin: 0;
  padding: 0;
  color: #333;
}

header {
  background: linear-gradient(to right, #ff9dcf, #a2c9f6);
  padding: 2rem;
  text-align: center;
  color: white;
}

.año {
  max-width: 800px;
  margin: 2rem auto;
}

.titulo-año {
  background-color: #fdd3ea;
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  user-select: none;
}

.contenido-año {
  display: none;
  margin-top: 1rem;
}

.semestre {
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px #ccc;
}

.rosado {
  background-color: #ffe3f3;
  border-left: 6px solid #ff70b8;
}

.azul {
  background-color: #e3f0ff;
  border-left: 6px solid #70b4ff;
}

h3 {
  margin-top: 0;
}

ul {
  padding-left: 1.2rem;
}

li {
  margin: 0.5rem 0;
  cursor: pointer;
  transition: 0.2s;
}

li.tachado {
  text-decoration: line-through;
  opacity: 0.6;
}
