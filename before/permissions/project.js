const { ROLE } = require('../data')
function canViewProject(user, project) {
    return (
        user.role === ROLE.ADMIN ||
        project.userId === user.id
    )
}
function scopedProjects(user, projects) {
    return projects.filter(project => canViewProject(user, project))
}
function canDeleteProject(user, project) {
    return project.userId === user.id
}
module.exports = {
    canViewProject,
    scopedProjects,
    canDeleteProject
}