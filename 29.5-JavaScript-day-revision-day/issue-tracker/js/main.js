document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

function submitIssue(e) {
	const getInputValue = (id) => document.getElementById(id).value;
	const description = getInputValue('issueDescription');
	const severity = getInputValue('issueSeverity');
	const assignedTo = getInputValue('issueAssignedTo');
	const id = Math.floor(Math.random() * 100000000) + '';
	const status = 'Open';

	const issue = { id, description, severity, assignedTo, status };
	let issues = [];
	if (localStorage.getItem('issues')) {
		issues = JSON.parse(localStorage.getItem('issues'));
	}
	issues.push(issue);
	localStorage.setItem('issues', JSON.stringify(issues));

	document.getElementById('issueInputForm').reset();
	fetchIssues();
	e.preventDefault();
}

const setStatusClosed = (id) => {
	const confirmation = confirm('Are you sure want to close this?');

	if (confirmation) {
		const issues = JSON.parse(localStorage.getItem('issues'));
		const currentIssue = issues.find((issue) => issue.id == id);
		console.log(currentIssue);
		currentIssue.status = 'Closed';
		localStorage.setItem('issues', JSON.stringify(issues));
		fetchIssues();
	} else {
		return alert('Please check this what happend!');
	}
};

const deleteIssue = (id) => {
	const confirmation = confirm('Are you sure want to delete this?');

	if (confirmation) {
		const issues = JSON.parse(localStorage.getItem('issues'));
		console.log(issues.length);
		const remainingIssues = issues.filter((list) => {
			return parseInt(list.id) !== parseInt(id);
		});
		localStorage.setItem('issues', JSON.stringify(remainingIssues));
		console.log(remainingIssues.length);
		fetchIssues();
	} else {
		return alert('Please check this what happend!');
	}
};

const fetchIssues = () => {
	const issues = JSON.parse(localStorage.getItem('issues'));
	const issuesList = document.getElementById('issuesList');
	issuesList.innerHTML = '';

	for (let i = 0; i < issues.length; i++) {
		const { id, description, severity, assignedTo, status } = issues[i];

		issuesList.innerHTML += `
		<div class="well">
        	<h6>Issue ID: ${id} </h6>
            	<p><span class="label label-info issue-status"> ${status} </span></p>
            <h3 class="issue-desc"> ${description} </h3>
                <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
            	<p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
               	<a href="#" onclick="setStatusClosed(${id})" class="btn btn-warning">Close</a>
               	<a href="#" onclick="deleteIssue(${id})" class="btn btn-danger">Delete</a>
        </div>`;

		if (issues[i].status === 'Closed') {
			const closedIssueDesc = document.querySelector('.issue-desc');
			closedIssueDesc.className = 'line-through';
			const closedIssueStatus = document.querySelector('.issue-status');
			closedIssueStatus.className = 'label issue-status-closed';
		}
	}

	countIssue();
};

// issue count
function countIssue() {
	const issues = JSON.parse(localStorage.getItem('issues'));
	const openIssue = issues.filter((issue) => issue.status === 'Open');
	const closeIssue = issues.filter((issue) => issue.status === 'Closed');
	const totalIssue = openIssue.length + closeIssue.length;

	document.getElementById('open').innerText = openIssue.length;
	document.getElementById('close').innerText = closeIssue.length;
	document.getElementById('total').innerText = totalIssue;
}
