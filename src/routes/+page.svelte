<script>
    import { goto } from '$app/navigation';
  
    function findYourPath() {
        goto('/cards');
    }
  </script>
  
  <svelte:head>
    <title>Accueil - Elios</title>
    <meta name="description" content="Elios, le Tinder de l'orientation basé sur l'IA" />
  </svelte:head>
  
  <section class="hero">
    <div class="hero-content">
        <img src="/images/LOGO BLANC-02.png" alt="Elios Logo" class="logo" />
        <h1>Bienvenue sur Elios</h1>
        <p>Le Tinder de l'orientation qui utilise l'intelligence artificielle pour affiner vos choix et trouver votre voie.</p>
        <button class="find-your-path" on:click={findYourPath}>Find your Path</button>
    </div>
  </section>
  
  <section class="bio">
    <h2>À propos d'Elios</h2>
    <p>Elios est le Tinder de l'orientation. Utilisant la puissance de l'intelligence artificielle, Elios vous aide à affiner vos choix de carrière et d'études pour trouver la voie qui vous correspond le mieux. Grâce à un système intuitif et interactif, vous pouvez explorer différentes options et découvrir des parcours qui vous ressemblent.</p>
  </section>
  
  <style>
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: linear-gradient(135deg, #f06, #f90);
        color: white;
        text-align: center;
        padding: 20px;
    }
  
    .hero-content {
        max-width: 600px;
    }
  
    .logo {
        width: 300px;
        margin-bottom: 10;
    }
  
    h1 {
        font-size: 3em;
        margin: 0;
        padding: 0;
    }
  
    p {
        font-size: 1.5em;
        margin: 20px 0;
    }
  
    .find-your-path {
        margin-top: 20px;
        padding: 20px 60px;
        font-size: 24px;
        background-color: yellow;
        color: black;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        animation: blink 1s infinite;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s;
    }
  
    .find-your-path:hover {
        background-color: gold;
        transform: translateY(-2px);
    }
  
    @keyframes blink {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
  
    .bio {
        background-color: white;
        color: #333;
        padding: 40px 20px;
        text-align: center;
    }
  
    .bio h2 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }
  
    .bio p {
        font-size: 1.2em;
        line-height: 1.5;
        max-width: 800px;
        margin: 0 auto;
    }
  </style>
  