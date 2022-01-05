const NavButtons = () => {
	return (
		<div className="prev-next-wrapper">
			<Button
				size="large"
				variant="outlined"
				onClick={() => props.prev(values)}>
				Back
			</Button>
			<Button size="large" type="submit" variant={'contained'}></Button>
		</div>
	);
};
