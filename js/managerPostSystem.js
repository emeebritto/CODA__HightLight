function delete_thisPost() {
	target = event.target;
	parentTarget = target.parentElement.parentElement.parentElement.parentElement;
	postUser = JSON.parse(localStorage.getItem(parentTarget.dataset.id));
	console.log(postUser)
	localStorage.removeItem(postUser.onCoda);
	localStorage.removeItem(parentTarget.dataset.id);
	parentTarget.remove();
}