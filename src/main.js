import Vue from 'vue'
import skills from './skills'
import summary from './summary'
import bio from './biography'
import projects from './projects'

new Vue({
    el: '#app',
    data: {
        name: 'Eshwar Rachala',
        bio: bio,
        skills: skills,
        points: summary,
        projects: projects

    }
})