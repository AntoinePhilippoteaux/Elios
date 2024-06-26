<script>


    let professions = [
        { id: 1, title: "Audit Financier", description: "L'auditeur financier est chargé d'examiner les états financiers des entreprises afin de garantir leur exactitude et leur conformité aux normes comptables. Il travaille souvent pour des cabinets d'audit ou directement pour de grandes entreprises. Son rôle est crucial pour maintenir la confiance des investisseurs et des autres parties prenantes.", salary: 70, workLifeBalance: 50 },
        { id: 2, title: "Médecin", description: "Le médecin diagnostique et traite les maladies, les blessures et les autres affections des patients. Il peut se spécialiser dans des domaines spécifiques comme la cardiologie, la dermatologie ou la pédiatrie. Les médecins travaillent généralement dans des hôpitaux, des cliniques ou en cabinet privé.", salary: 85, workLifeBalance: 40 },
        { id: 3, title: "Ingénieur", description: "L'ingénieur conçoit, construit et teste des structures, des matériaux et des systèmes tout en tenant compte des contraintes de coût, de sécurité et d'environnement. Il peut se spécialiser dans divers domaines tels que le génie civil, le génie mécanique ou le génie électrique. Les ingénieurs jouent un rôle clé dans l'innovation technologique et le développement de nouvelles solutions.", salary: 75, workLifeBalance: 60 },
        { id: 4, title: "Professeur", description: "Le professeur enseigne et transmet des connaissances à ses élèves, que ce soit dans les écoles primaires, les lycées ou les universités. Il prépare les cours, évalue les progrès des étudiants et peut aussi participer à la recherche académique. Le rôle du professeur est essentiel pour former les futures générations.", salary: 60, workLifeBalance: 70 },
        { id: 5, title: "Développeur", description: "Le développeur crée et maintient des applications et des logiciels. Il écrit du code, teste des programmes et corrige les erreurs pour assurer le bon fonctionnement des systèmes. Les développeurs peuvent travailler dans divers secteurs, notamment la technologie, la finance et la santé, et sont souvent à la pointe de l'innovation numérique.", salary: 80, workLifeBalance: 60 },
        { id: 6, title: "Avocat", description: "L'avocat conseille et représente ses clients en justice. Il peut se spécialiser dans différents domaines du droit comme le droit des affaires, le droit pénal ou le droit de la famille. Les avocats jouent un rôle crucial dans la défense des droits et des intérêts de leurs clients, et leur expertise est indispensable pour naviguer dans les systèmes juridiques complexes.", salary: 90, workLifeBalance: 50 },
        { id: 7, title: "Architecte", description: "L'architecte conçoit et planifie la construction de bâtiments et d'autres structures. Il travaille en étroite collaboration avec les clients pour créer des designs fonctionnels et esthétiques, tout en respectant les réglementations en vigueur. Les architectes jouent un rôle clé dans le façonnement de nos environnements urbains et ruraux.", salary: 70, workLifeBalance: 60 },
        { id: 8, title: "Journaliste", description: "Le journaliste enquête, écrit et rapporte des nouvelles et des événements. Il peut travailler pour des journaux, des magazines, des chaînes de télévision ou des sites web. Les journalistes sont responsables de fournir des informations précises et impartiales au public, et jouent un rôle crucial dans la liberté de la presse et la démocratie.", salary: 55, workLifeBalance: 65 },
        { id: 9, title: "Pharmacien", description: "Le pharmacien prépare et dispense des médicaments et conseille les patients sur leur utilisation. Il travaille souvent dans des pharmacies, des hôpitaux ou des laboratoires. Les pharmaciens jouent un rôle essentiel dans le système de santé, en veillant à ce que les patients reçoivent les traitements appropriés et en fournissant des conseils sur la santé et le bien-être.", salary: 70, workLifeBalance: 55 },
        { id: 10, title: "Chef cuisinier", description: "Le chef cuisinier prépare des plats et gère une équipe en cuisine. Il crée des menus, sélectionne les ingrédients et supervise la préparation des repas. Les chefs cuisiniers peuvent travailler dans des restaurants, des hôtels ou des établissements de restauration collective, et sont souvent reconnus pour leur créativité et leur expertise culinaire.", salary: 50, workLifeBalance: 45 },
        { id: 11, title: "Consultant", description: "Le consultant conseille les entreprises pour améliorer leur performance. Il analyse les problèmes, propose des solutions et aide à la mise en œuvre de nouvelles stratégies. Les consultants peuvent se spécialiser dans divers domaines comme la gestion, la finance, les ressources humaines ou la technologie, et jouent un rôle clé dans l'optimisation des opérations des entreprises.", salary: 85, workLifeBalance: 55 },
        { id: 12, title: "Scientifique", description: "Le scientifique mène des recherches pour développer des connaissances et des technologies. Il peut travailler dans des laboratoires, des universités ou des institutions de recherche. Les scientifiques sont responsables de nombreuses découvertes et innovations qui améliorent notre compréhension du monde et notre qualité de vie.", salary: 75, workLifeBalance: 60 },
        { id: 13, title: "Designer", description: "Le designer conçoit des produits, des interfaces et des expériences visuelles. Il peut se spécialiser dans des domaines tels que le design graphique, le design de produits ou le design d'interfaces utilisateur. Les designers jouent un rôle crucial dans la création d'objets et d'expériences esthétiques et fonctionnels qui enrichissent notre quotidien.", salary: 65, workLifeBalance: 60 },
        { id: 14, title: "Entrepreneur", description: "L'entrepreneur crée et gère des entreprises innovantes. Il identifie des opportunités, développe des idées et prend des risques pour lancer de nouveaux produits ou services. Les entrepreneurs sont souvent à la pointe de l'innovation et contribuent de manière significative à la croissance économique et à la création d'emplois.", salary: 95, workLifeBalance: 50 },
        { id: 15, title: "Pilote", description: "Le pilote conduit des avions et assure le transport aérien. Il est responsable de la sécurité des passagers et de l'équipage, et doit suivre des procédures strictes et des protocoles de sécurité. Les pilotes peuvent travailler pour des compagnies aériennes commerciales, des entreprises de fret ou des organismes gouvernementaux, et doivent avoir une formation et une certification rigoureuses.", salary: 90, workLifeBalance: 55 }
    ];
  
    let favorites = [];
  
    function addToFavorites(profession) {
        if (!favorites.includes(profession)) {
            favorites = [...favorites, profession];
        }
    }
    
    function removeFromFavorites(profession) {
        favorites = favorites.filter(fav => fav.id !== profession.id);
    }
  </script>
  
  <svelte:head>
    <title>Professions</title>
    <meta name="description" content="Explore different professions" />
  </svelte:head>
  
<section>
    <h1>Explorez les Métiers</h1>
    <div class="cards">
        {#each professions as profession}
            <div class="card">
                <h2>{profession.title}</h2>
                <p>{profession.description}</p>
                <div class="stats">
                    <div class="stat">
                        <label>Salaire :</label>
                        <div class="bar" style="width: {profession.salary}%"></div>
                    </div>
                    <div class="stat">
                        <label>Équilibre travail-vie :</label>
                        <div class="bar" style="width: {profession.workLifeBalance}%"></div>
                    </div>
                </div>
                <button class="like-btn" on:click={() => addToFavorites(profession)}>J'aime</button>
                <button class="dislike-btn" on:click={() => removeFromFavorites(profession)}>Je n'aime pas</button>
            </div>
        {/each}
    </div>
</section>
  
  <section>
    <h1>Favoris</h1>
    <div class="cards">
        {#each favorites as profession}
            <div class="card">
                <h2>{profession.title}</h2>
                <p>{profession.description}</p>
                <div class="stats">
                    <div class="stat">
                        <label>Salaire :</label>
                        <div class="bar" style="width: {profession.salary}%"></div>
                    </div>
                    <div class="stat">
                        <label>Équilibre travail-vie :</label>
                        <div class="bar" style="width: {profession.workLifeBalance}%"></div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
  </section>
  
  <style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background: linear-gradient(135deg, #f06, #f90);
        color: white;
        text-align: center;
        min-height: 100vh;
        box-sizing: border-box;
        overflow-y: auto;
    }
  
    h1 {
        font-size: 3.5em;
        margin-bottom: 20px;
    }
  
    .cards {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        max-width: 800px;
        padding: 0 20px;
        box-sizing: border-box;
    }
  
    .card {
        background: white;
        color: black;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
        text-align: left;
        margin: 10px 0;
        box-sizing: border-box;
    }
  
    .card:hover {
        transform: scale(1.05);
    }
  
    .stats {
        margin: 10px 0;
    }
  
    .stat {
        margin: 5px 0;
    }
  
    .bar {
        height: 20px;
        background-color: #1e90ff;
        border-radius: 10px;
        transition: width 0.5s;
    }
  
    .like-btn, .dislike-btn {
        padding: 10px 20px;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }
  
    .like-btn {
        background-color: #32cd32;
        color: white;
    }
  
    .dislike-btn {
        background-color: #ff6347;
        color: white;
        margin-left: 10px;
    }
  
    .like-btn:hover {
        background-color: #2e8b57;
    }
  
    .dislike-btn:hover {
        background-color: #cd5c5c;
    }
  </style>
  
