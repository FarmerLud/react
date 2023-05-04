export function TwitterFollowCard ({ children, userName,  isFollowing}) {
    return (
		<article className="dpF aiC jcSB coWhite fs0_8rem">
			<header className="dpF aiC g0_25rem">
				<img className="w3rem h3rem br50pc" alt="midudev" 
				src={`https://unavatar.io/${userName}`}/>
				<div className='dpF fdC'>
					<strong>{children}</strong>
					<span className='opc0_6'>@{userName}</span>
				</div>
			</header>

			<aside>
				<button className='mgL1rem b0 br1rem pd1rem pdT0_5rem pdB0_5rem fwB'>Seguir</button>
			</aside>
		</article>
	)
}