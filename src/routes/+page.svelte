<script lang="ts">
	type Image = {
		alt: string;
		src: string;
	}

	type Item = {
		id: number;
		label: string;
		images: Image[];
		desc: string;
		url?: string;
	}

	import { projs } from '$lib/data.js'
	
	
	import { Carrusel, CarruselSlide } from 'carrusel';
	

  let now = (new Date()).getFullYear()
	let visible = false;
	let current: Item;

	const toggle = (index: number) => {
		visible = !visible;
		current = projs[index];
	};

	const close = () => {
		visible = false;
	};

	let style = '';

	$: {
		const lightColor = [];
		const darkColor = [];
		for (let i = 0; i < 3; i++) {
			lightColor.push(Math.ceil(Math.random() * 35) + 200);
			darkColor[i] = lightColor[i] - 150;
		}

		style = [
			`--light-color: rgb(${lightColor.join(',')})`,
			`--dark-color: rgb(${darkColor.join(',')})`
		].join(';');
	}
</script>

<svelte:head>
	<title>我的历史项目</title>
	<script>
		var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?a11eb888b25e1a90e131b22c5a2ca113";
			var s = document.getElementsByTagName("script")[0]; 
			s.parentNode.insertBefore(hm, s);
		})();
	</script>
</svelte:head>

<main {style}>
	<h1>历史项目展示</h1>
  <p>此页面由SvelteKit开发 部署在Cloudflare Pages服务上</p>
	<ul>
		{#each projs as { url, label, desc, images }, index}
			<li>
				<div class="md">
					<h2>{label}</h2>
					<p>{desc} {url ? `【网址】${url}` : ''}</p>
				</div>
				<div class="et">
					{#if url}
          	<a target="_blank" href={url}>访问链接</a>
					{/if}
					{#if images.length > 0}
						<button on:click={() => toggle(index)} type="button">查看截图</button>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
  <footer>&copy; { now } 版权为堪笑所有 <a target="_blank" href="https://github.com/namesfang/screenshot.cli.life"><svg viewBox="0 0 1049 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M524.979332 0C234.676191 0 0 234.676191 0 524.979332c0 232.068678 150.366597 428.501342 358.967656 498.035028 26.075132 5.215026 35.636014-11.299224 35.636014-25.205961 0-12.168395-0.869171-53.888607-0.869171-97.347161-146.020741 31.290159-176.441729-62.580318-176.441729-62.580318-23.467619-60.841976-58.234462-76.487055-58.234463-76.487055-47.804409-32.15933 3.476684-32.15933 3.476685-32.15933 53.019436 3.476684 80.83291 53.888607 80.83291 53.888607 46.935238 79.963739 122.553122 57.365291 152.97411 43.458554 4.345855-33.897672 18.252593-57.365291 33.028501-70.402857-116.468925-12.168395-239.022047-57.365291-239.022047-259.012982 0-57.365291 20.860106-104.300529 53.888607-140.805715-5.215026-13.037566-23.467619-66.926173 5.215027-139.067372 0 0 44.327725-13.906737 144.282399 53.888607 41.720212-11.299224 86.917108-17.383422 131.244833-17.383422s89.524621 6.084198 131.244833 17.383422C756.178839 203.386032 800.506564 217.29277 800.506564 217.29277c28.682646 72.1412 10.430053 126.029806 5.215026 139.067372 33.897672 36.505185 53.888607 83.440424 53.888607 140.805715 0 201.64769-122.553122 245.975415-239.891218 259.012982 19.121764 16.514251 35.636014 47.804409 35.636015 97.347161 0 70.402857-0.869171 126.898978-0.869172 144.282399 0 13.906737 9.560882 30.420988 35.636015 25.205961 208.601059-69.533686 358.967656-265.96635 358.967655-498.035028C1049.958663 234.676191 814.413301 0 524.979332 0z" fill="#191717"></path><path d="M199.040177 753.571326c-0.869171 2.607513-5.215026 3.476684-8.691711 1.738342s-6.084198-5.215026-4.345855-7.82254c0.869171-2.607513 5.215026-3.476684 8.691711-1.738342s5.215026 5.215026 4.345855 7.82254z m-6.953369-4.345856M219.900283 777.038945c-2.607513 2.607513-7.82254 0.869171-10.430053-2.607514-3.476684-3.476684-4.345855-8.691711-1.738342-11.299224 2.607513-2.607513 6.953369-0.869171 10.430053 2.607514 3.476684 4.345855 4.345855 9.560882 1.738342 11.299224z m-5.215026-5.215027M240.760389 807.459932c-3.476684 2.607513-8.691711 0-11.299224-4.345855-3.476684-4.345855-3.476684-10.430053 0-12.168395 3.476684-2.607513 8.691711 0 11.299224 4.345855 3.476684 4.345855 3.476684 9.560882 0 12.168395z m0 0M269.443034 837.011749c-2.607513 3.476684-8.691711 2.607513-13.906737-1.738342-4.345855-4.345855-6.084198-10.430053-2.607513-13.037566 2.607513-3.476684 8.691711-2.607513 13.906737 1.738342 4.345855 3.476684 5.215026 9.560882 2.607513 13.037566z m0 0M308.555733 853.526c-0.869171 4.345855-6.953369 6.084198-13.037566 4.345855-6.084198-1.738342-9.560882-6.953369-8.691711-10.430053 0.869171-4.345855 6.953369-6.084198 13.037566-4.345855 6.084198 1.738342 9.560882 6.084198 8.691711 10.430053z m0 0M351.145116 857.002684c0 4.345855-5.215026 7.82254-11.299224 7.82254-6.084198 0-11.299224-3.476684-11.299224-7.82254s5.215026-7.82254 11.299224-7.82254c6.084198 0 11.299224 3.476684 11.299224 7.82254z m0 0M391.126986 850.049315c0.869171 4.345855-3.476684 8.691711-9.560882 9.560882-6.084198 0.869171-11.299224-1.738342-12.168395-6.084197-0.869171-4.345855 3.476684-8.691711 9.560881-9.560882 6.084198-0.869171 11.299224 1.738342 12.168396 6.084197z m0 0" fill="#191717"></path></svg></a></footer>
</main>


{#if visible}
	<div class="carrusel">
		<Carrusel ariaLabel="" class="player" draggable pagination>
			{#each current.images as { src, alt}}
				<CarruselSlide>
					<img {src} {alt} height="100%" />
          <h2>{alt}</h2>
				</CarruselSlide>
			{/each}
		</Carrusel>
		<button on:click={close} type="button">
			<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <path fill="#ffffff" d="M240.512 180.181333l271.530667 271.488 271.530666-271.488a42.666667 42.666667 0 0 1 56.32-3.541333l4.010667 3.541333a42.666667 42.666667 0 0 1 0 60.330667l-271.530667 271.530667 271.530667 271.530666a42.666667 42.666667 0 0 1-56.32 63.872l-4.010667-3.541333-271.530666-271.530667-271.530667 271.530667-4.010667 3.541333a42.666667 42.666667 0 0 1-56.32-63.872l271.488-271.530666-271.488-271.530667a42.666667 42.666667 0 0 1 60.330667-60.330667z"></path>
			</svg>
		</button>
	</div>
{/if}

<style lang="scss" scoped>
	:global(body) {
		background-color: #f1f1f1;
	}

	main {
		max-width: 900px;
		height: auto;
		overflow: hidden;
		margin: 0 auto;
		padding: 12px;
		

		h1 {
			color: var(--dark-color);
      margin: 0;
		}
    &>p {
      line-height: 36px;
      color: var(--dark-color);
      font-size: 12px;
      margin: 0;
    }

		ul {
			margin: 0;
			padding: 0;
			li {
				color: #393939;
				list-style: none;
				padding: 18px 12px;
				margin-bottom: 1rem;
				display: flex;
				background-color: var(--light-color);

				&:last-child {
					margin: 0;
				}

				.md {
					flex: 1;
					padding-right: 12px;
					h2 {
						font-size: 18px;
						line-height: 30px;
						color: var(--dark-color);
						margin: 0;
					}

					p {
						font-size: 14px;
						color: #686868;
						margin: 6px 0 0 0;
					}
				}

				.et {
					display: flex;
					align-items: center;
					a,
					button {
						width: 80px;
						height: 32px;
						text: {
							align: center;
							decoration: none;
						}          
						font-size: 14px;
						line-height: 32px;
						border: none;
						background-color: var(--dark-color);
						color: #fff;
						display: block;
					}

					a {
						background-color: #f73030;
					}
				}
        
			}
		}

    footer {
      height: 36px;
      font-size: 12px;
      color: var(--dark-color);
			display: flex;
			align-items: center;
			justify-content: center;

			a {
				width: 20px;
				height: 20px;
				display: inline-block;
				margin-left: 10px;
				svg {
					width: 20px;
					height: 20px;
				}
			}
    }
	}

	.carrusel {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		inset: 0;

    button {
			width: 48px;
			height: 48px;
			border: 0;

			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #f73030;
			position: absolute;
			top: 1rem;
			right: 3rem;
			svg {
				fill: #fff;
			}
		}
	}

	.carrusel :global(.player) {
		height: 100%;
		width: 100%;
	}

	:global(.carrusel .player li) {
    height: 100vh;
    display: flex;
		align-items: center;
		justify-content: center;
    position: relative;
	}

	:global(.carrusel li img) {
		max-height: 100%;
	}

  :global(.carrusel li h2) {
    font: {
      size: 16px;
      weight: normal;
    }
		line-height: 36px;
    color: #fff;
    margin: 0;
    padding: 0 10px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
	}
</style>
