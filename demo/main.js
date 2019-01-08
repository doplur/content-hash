
window.onload = () => {
	console.log('contentHash')

	const ipfsInputElem = document.getElementById('ipfs-input')
	const ipfsButtonElem = document.getElementById('ipfs-encode')
	const ipfsResultElem = document.getElementById('ipfs-result')
	ipfsButtonElem.addEventListener('click', () => {
		ipfsResultElem.innerHTML = contentHash.fromIpfs(ipfsInputElem.value)
	})

	const swarmInputElem = document.getElementById('swarm-input')
	const swarmButtonElem = document.getElementById('swarm-encode')
	const swarmResultElem = document.getElementById('swarm-result')
	swarmButtonElem.addEventListener('click', () => {
		swarmResultElem.innerHTML = contentHash.fromSwarm(swarmInputElem.value)
	})

	const contentInputElem = document.getElementById('content-input')
	const contentButtonElem = document.getElementById('content-decode')
	const contentResultElem = document.getElementById('content-result')
	const codecResultElem = document.getElementById('codec-result')
	contentButtonElem.addEventListener('click', () => {
		contentResultElem.innerHTML = contentHash.decode(contentInputElem.value)
		
		let codec = 'unknown'
		
		if(contentHash.isHashOfType(contentInputElem.value, contentHash.Types.ipfs))codec = 'ipfs'
		else if(contentHash.isHashOfType(contentInputElem.value, contentHash.Types.swarm))codec = 'swarm'

		codecResultElem.innerHTML = 'codec : ' + codec
	})
}