
window.onload = () => {
	console.log('contentHash ✅')

	const ipfsInputElem = document.getElementById('ipfs-input')
	const ipfsButtonElem = document.getElementById('ipfs-encode')
	const ipfsResultElem = document.getElementById('ipfs-result')
	ipfsButtonElem.addEventListener('click', () => {
		ipfsResultElem.innerHTML = contentHash.fromIpfs(ipfsInputElem.value)
	})

	const skynetInputElem = document.getElementById('skynet-input')
	const skynetButtonElem = document.getElementById('skynet-encode')
	const skynetResultElem = document.getElementById('skynet-result')
	skynetButtonElem.addEventListener('click', () => {
		skynetResultElem.innerHTML = contentHash.encode("skynet-ns", skynetInputElem.value)
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
		let cth = contentHash.decode(contentInputElem.value)
		
		let codec = 'unknown'
		
		if(contentHash.getCodec(contentInputElem.value) === 'ipfs-ns')codec = 'ipfs'
		else if(contentHash.getCodec(contentInputElem.value) === 'swarm-ns')codec = 'swarm'
		else if(contentHash.getCodec(contentInputElem.value) === 'skynet-ns')codec = 'skynet'

		let url = 'https://'
		if(codec === 'ipfs') url += 'gateway.ipfs.io/ipfs/' + cth + '/'
		else if(codec === 'swarm') url += 'swarm-gateways.net/bzz:/' + cth + '/'
		else if(codec === 'skynet') url += 'siasky.net/' + cth + '/'
		else url = '#'

		codecResultElem.innerHTML = 'codec : ' + codec
		contentResultElem.innerHTML = cth
		contentResultElem.href = url
	})
}