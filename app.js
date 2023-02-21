let skill = {
    template: `
    <div class="box3">
    <h2>Compétences</h2>  
    <ul>
      <li v-for="skill of skills"> {{skill.name}}</li>
    </ul>  
    </div>
    `,
    props: ["skills"]
  }
  
  
  
  let exp = {
    template: `
    <div class="box2" >
    <h2>Expériences</h2>
    <ul>
      <li v-for="job of jobs"> {{job.name}} {{job.start}} {{job.end}}</li>
    </ul>
      </div>
  
    `,
    props: ["jobs"]
  }
  
  
  let formation = {
    template: `
    <div class="box2">
    <h2> formations</h2>
    
    <ul>
      <li v-for="school of schools"> {{school.name}} {{school.start}} {{school.end}}</li>
    </ul>
    
    </div>
  
    `,
    props: ["schools"]
  
  }
  
  
  let personal = {
    template: `
    <div class="box">  
      <h1>Curriculum Vitae</h1>
      <h2>Coodonnées</h2>
      <p class="name">{{nom}} {{prenom}}</p> 
      <p>{{adress}}</p> 
      <p v-if="birthday !== null">{{age}} ans</p>
      <p v-if="drive == true" class="green"> Titulaire d'un permis de Conduite | Niveau B </p>
    </div>
    `,
    props: ["nom", "prenom", "adress", "birthday", "drive"],
    computed: {
      age: function () {
        now = Date.now()
        total = (now - Date.parse(this.birthday)) / 31536000000
        return Math.floor(total);
      }
    }
  };
  
  let vm = new Vue({
    /*Création d'une instance de vue, et passage du code en option*/
    el: '#app',
    /*Sélecteur. Même syntaxe que le CSS*/
    data: {
  
      nom: null,
      prenom: null,
      adress: null,
      birthday: null,
      drive: null,
      schools: [],
      jobs: [],
      skills: []
  
    },
  
    components: {
  
      "personal-cmp": personal,
      "formation-cmp": formation,
      "exp-cmp": exp,
      "skill-cmp": skill
  
    },
    methods: {
  
      saveCv: function () {
        localStorage.setItem("cv", JSON.stringify(this.$data))
  
      },
  
      addSchool: function () {
  
        let label = document.getElementById("schoolLib").value
        let start = document.getElementById("schoolStart").value
        let end = document.getElementById("schoolEnd").value
  
        let school = {
          name: label,
          start: start,
          end: end
        }
  
        this.schools.push(school)
  
        document.getElementById("schoolLib").value = ''
        document.getElementById("schoolStart").value = ''
        document.getElementById("schoolEnd").value = ''
  
      },
      addJob: function () {
  
        let label = document.getElementById("jobLib").value
        let start = document.getElementById("jobStart").value
        let end = document.getElementById("jobEnd").value
  
        let job = {
          name: label,
          start: start,
          end: end
        }
  
        this.jobs.push(job)
  
        document.getElementById("jobLib").value = ''
        document.getElementById("jobStart").value = ''
        document.getElementById("jobEnd").value = ''
  
      },
      addSkill: function () {
  
        let label = document.getElementById("skillLib").value
  
        let skill = {
  
          name: label
        }
        this.skills.push(skill)
        document.getElementById("skillLib").value = ''
  
      }
    }
  });