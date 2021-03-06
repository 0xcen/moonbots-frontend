import React from 'react';

const Socials = () => {
	return (
		<section className="section-soclials">
			<div className="section-socials">
				<div className="grid-2">
					<a
						href="https://twitter.com/wenmoonbots"
						rel="noreferrer"
						target="_blank"
					>
						<div className="card twitter-blue">
							<div className="icons">
								<img
									src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/twitter-white.svg"
									alt=""
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
									<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
								</svg>
							</div>
							<div className="content">
								<h3>Follow us on Twitter</h3>
								<p>
									Be a part of a growing community of buildoors <br />
									on
									<span>
										<img
											className="solana-logo"
											src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/solanaLogo.svg"
											alt="Solana logo"
										/>
									</span>
								</p>
							</div>
						</div>
					</a>
					<a
						href="https://discord.com/users/924803349319147620"
						rel="noreferrer"
						target="_blank"
					>
						<div className="card discord-purple">
							<div className="icons">
								<img
									src="https://moonstore.fra1.cdn.digitaloceanspaces.com/web/Discord-Logo-White.svg"
									alt=""
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
									<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
								</svg>
							</div>
							<div className="content">
								<h3>Join our Discord</h3>
								<p>
									Reach out to us on Discord if you have any questions. We're
									there to help.
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Socials;
