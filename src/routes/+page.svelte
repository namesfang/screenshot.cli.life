<script lang="ts">
	import { Carrusel, CarruselSlide } from 'carrusel';
	import type { Item } from './+page.server';

	export let data;

  let now = (new Date()).getFullYear()
	let visible = false;
	let current: Item;

	const toggle = (index: number) => {
		visible = !visible;
		current = data.projs[index];
	};

	const close = () => {
		visible = false;
	};

	let style = '';

	$: {
		const lightColor = [];
		const darkColor = [];
		for (let i = 0; i < 3; i++) {
			lightColor.push(Math.ceil(Math.random() * 35) + 220);
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
</svelte:head>

<main {style}>
	<h1>历史项目展示</h1>
  <p>此页面由SvelteKit开发 部署在Cloudflare Pages服务上</p>
	<ul>
		{#each data.projs as { url, label, desc }, index}
			<li>
				<h2>{label}</h2>
				<p>{desc} {url ? `【网址】${url}` : ''}</p>
        {#if url}
          <a target="_blank" href={url}>访问链接</a>
        {:else}
				  <button on:click={() => toggle(index)} type="button">查看截图</button>
        {/if}
			</li>
		{/each}
	</ul>
  <footer>&copy; { now } 版权为堪笑所有</footer>
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
		max-width: 1200px;
    min-width: 860px;
		height: auto;
		overflow: hidden;
		margin: 0 auto;
		padding: 12px;
		background-color: var(--light-color);

		h1 {
			color: var(--dark-color);
			padding: 0 12px;
      margin: 0;
		}
    &>p {
      line-height: 36px;
      color: var(--dark-color);
      font-size: 12px;
      padding: 0 12px;
      margin: 0;
    }

		ul {
			margin: 0;
			padding: 0;
			li {
				list-style: none;
				margin-bottom: 1rem;
				color: #393939;
				background-color: #fff;
				display: block;
				padding: 18px 12px;
				text-decoration: none;
				position: relative;

				&:last-child {
					margin: 0;
				}

				h2 {
					font-size: 18px;
					line-height: 30px;
          color: var(--dark-color);
					margin: 0;
				}

				p {
          font-size: 14px;
					color: #838383;
					margin: 6px 0 0 0;
				}

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
					position: absolute;
					right: 2rem;
					top: 50%;
					margin-top: -16px;
					display: block;
				}

        a {
          background-color: #f73030;
        }
			}
		}

    footer {
      line-height: 36px;
      text-align: center;
      font-size: 12px;
      color: var(--dark-color);
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
