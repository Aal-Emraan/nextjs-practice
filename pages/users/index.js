import React from "react";

const index = ({ users, notFound }) => {
	console.log(notFound);
	return (
		<div>
			<h1>this is users: {users.length}</h1>
			{users.map((user) => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
};

export default index;

export async function getStaticProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();

	if (!users) {
		return { notFound: true };
	}

	return {
		props: { users },
	};
}
