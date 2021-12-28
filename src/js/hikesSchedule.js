const infoButtons = Array.from(document.querySelectorAll('.js--month-info-button'));

infoButtons.forEach(button => {
    button.addEventListener('click', (evt) => {
        evt.target.classList.toggle('active');
    });
});

const activityButtons = Array.from(document.querySelectorAll('.js--activity-type-button'));
const activityCalendars = Array.from(document.querySelectorAll('.js--activity-calendar'));

const onActivityTypeSelect = (evt, activityButtonIndex) => {
    activityButtons.forEach(button => button.classList.remove('active'));
    evt.target.classList.add('active');

    activityCalendars.forEach(button => button.classList.remove('active'));
    activityCalendars[activityButtonIndex].classList.add('active');
}

activityButtons.forEach((button, index) => {
    button.addEventListener('click', (evt) => onActivityTypeSelect(evt, index));
});