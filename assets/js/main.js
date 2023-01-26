// vai gerir o html

// carrega o perfil
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name
    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
    const linkedin = document.getElementById('profile.linkedin')
    linkedin.innerText = profileData.linkalias
    linkedin.href = profileData.linkedin
    const github = document.getElementById('profile.github')
    github.innerText = profileData.gitalias
    github.href = profileData.github
}

function updateProfileHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"/><span>${skill.name}</span>`).join('')
}

function updateProfileSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateProfileEducationGrad(profileData) {
    const graduation = document.getElementById('profile.edu.graduation')
    graduation.innerHTML = profileData.education.graduation.map(education => `<li><i class="fa-solid fa-user-graduate"></i>${education.institution} - ${education.course}</li>`).join('')
}

function updateProfileEducationCourses(profileData) {
    const courses = document.getElementById('profile.edu.courses')
    courses.innerHTML = profileData.education.courses.map(education => `<li><i class="fa-solid fa-award"></i>${education.institution} - ${education.course}</li>`).join('')
}

function updateProfileLanguages(profileData) {
    const language = document.getElementById('profile.lang')
    language.innerHTML = profileData.languages.map(language => `<li><i class="fa-regular fa-flag"></i>${language}</li>`).join('')
}

function updateProfileProjects(profileData) {
    const projects = document.getElementById('profile.project')
    projects.innerHTML = profileData.projects.map(project => {
        return `
            <li>
                <span class="title">${project.github ? `<i class="fa-brands fa-github"></i>` : `<i class="fa-solid fa-code"></i>`}${project.name} - ${project.description}</span>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
        `
    }).join('')
}

function updateProfileExperience(profileData) {
    const experience = document.getElementById('profile.proExp')
    experience.innerHTML = profileData.professionalExperience.map(experience => `
        <li><span class="title"><i class="fa-solid fa-thumbtack"></i> ${experience.name}</span>
        <span>|</span>
        <span class="empresa">${experience.period}</span>
        <p class="descricao">${experience.description}</p>
        </li>
    `
    ).join('')
}

// funcao alto invocada, chama o  fetch e as funcoes de update
(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateProfileSoftSkills(profileData)
    updateProfileHardSkills(profileData)
    updateProfileEducationGrad(profileData)
    updateProfileEducationCourses(profileData)
    updateProfileLanguages(profileData)
    updateProfileProjects(profileData)
    updateProfileExperience(profileData)
})()