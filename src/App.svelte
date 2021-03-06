<div class="app">
  <h1>Fabric calculator</h1>
  <p>
    This tool can calculate how much fabric you should buy based on the pieces you need to cut.
  </p>
  <div class="flex flex-h-when-big">
    <div>
      <div class="pad-v-10 pad-h-10">
        <div class="grid grid-gap-20 grid-2fr-1fr">
          <label for="unit">Measurement unit:</label>
          <div class="input-wrap">
            <select id="unit" bind:value={unit}>
              {#each Object.keys(units) as u}
                <option value="{u}">{units[u].long}</option>
              {/each}
            </select>
          </div>
          <label for="fabric-width">Width of fabric you're buying:</label>
          <div class="input-wrap">
            <input id="fabric-width" type="number" inputmode="numeric"
                   placeholder="45" bind:value={fabricWidth}>
          </div>
          <label for="fabric-increment">Fabric sold in increments of:</label>
          <div class="input-wrap">
            <input id="fabric-increment" type="number" inputmode="numeric"
                   placeholder="18" bind:value={fabricSoldBy}>
          </div>
          <div class="grid-span-2">
            <input id="fabric-rotation" type="checkbox" bind:checked={allowRotation}>
            <label for="fabric-rotation">Allow rotation of fabric pieces</label>
          </div>
        </div>
      </div>
      <div>
        <h2>Pieces of fabric</h2>
        <ul>
            {#each fabricPieces as fabricPiece, i (fabricPiece.id)}
              <li class="pad-v-10">
                <div class="center-v left-h">
                  <div class="center-v left-h">
                    <div class="indicator" style="background-color: {getColor(fabricPiece.id)};"/>
                    <strong>Fabric piece #{i + 1}</strong>
                  </div>
                  <div class="flex-1 text-align-right">
                    <button type="button" on:click={() => removeFabricPiece(i)} aria-label="Remove" title="Remove">
                      &times;
                    </button>
                  </div>
                </div>
                <div class="grid grid-gap-10 pad-v-10 fabric-piece-grid">
                  <div>
                    <label for="fabric-width-{i}">Width:</label>
                  </div>
                  <div class="input-wrap">
                    <input id="fabric-width-{i}" type="number" inputmode="numeric"
                           placeholder="10" bind:value={fabricPieces[i].width}>
                  </div>
                  <div>
                    <label for="fabric-height-{i}">Length:</label>
                  </div>
                  <div class="input-wrap">
                    <input id="fabric-height-{i}" type="number" inputmode="numeric"
                           placeholder="10" bind:value={fabricPieces[i].height}>
                  </div>
                </div>
                <div class="grid grid-gap-10 pad-v-10 fabric-piece-grid">
                  <div>
                    <label for="fabric-amount-{i}">Amount:</label>
                  </div>
                  <div class="input-wrap">
                    <input id="fabric-amount-{i}" type="number" inputmode="numeric"
                           placeholder="1" bind:value={fabricPieces[i].amount}>
                  </div>
                </div>
              </li>
            {/each}
        </ul>
        <div class="pad-v-10">
          <button type="button" on:click={addFabricPiece}>Add fabric piece</button>
        </div>
      </div>
    </div>
    <div class="text-align-center">
        {#if errorMessage}
          <div class="error-message pad-v-10">{errorMessage}</div>
        {/if}
        {#if solution && !errorMessage}
          <div class="solution-message pad-v-10">
            You need a piece of fabric <strong>{solution.fabricHeight} {units[unit].long}</strong> long.
          </div>
        {/if}
        {#if solution}
          <Diagram
            items={solution.items}
            width={fabricWidth}
            height={solution.fabricHeight}
            increment={fabricSoldBy}
            unit={units[unit]}
          />
        {/if}
    </div>
  </div>
  <footer>
    Created by <a href="https://nolanlawson.com" target="_blank" rel="noopener">Nolan Lawson</a>.
    See the <a href="https://github.com/nolanlawson/fabric-calculator">source code</a>.
  </footer>
</div>
<style>
  :global(*, *::before, *::after) {
    box-sizing: border-box;
  }

  :global(body) {
    font-family: sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  /* via https://stackoverflow.com/a/19758620 */
  :global(.sr-only) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }


  .grid {
    display: grid;
    align-items: center;
  }

  .grid-gap-20 {
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }

  .grid-gap-10 {
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }

  .grid-span-2 {
    grid-column: 1 / 3;
  }

  .grid-2fr-1fr {
    grid-template-columns: 2fr 1fr;
  }

  .input-wrap {
    min-width: 0;
    display: flex;
  }

  .input-wrap input,
  .input-wrap select {
    flex: 1;
    width: 0;
    max-width: 100%;
  }

  .flex {
    display: flex;
  }

  .flex > * {
    flex: 1;
  }

  .flex-h {
    flex-direction: row;
  }

  .flex-h-when-big {
    flex-direction: row;
  }

  .flex-h-when-big > :first-child {
    margin-right: 20px;
  }

  @media (max-width: 767px) {
    .flex-h-when-big {
      flex-direction: column;
    }

    .flex-h-when-big > :first-child {
      margin-bottom: 20px;
    }
  }

  .fabric-piece-grid {
    grid-template-columns: min-content 1fr min-content 1fr;
  }

  @media (max-width: 767px) {
    .fabric-piece-grid {
      grid-template-columns: 2fr 1fr;
    }
  }

  .indicator {
    width: 1em;
    height: 1em;
    border-radius: 1px;
    display: inline-block;
    margin-right: 10px;
  }

  .center-h {
    display: flex;
    justify-content: center;
  }

  .text-align-center {
    text-align: center;
  }

  .text-align-right {
    text-align: right;
  }

  .flex-1 {
    flex: 1;
  }

  .center-v {
    display: flex;
    align-items: center;
  }

  .left-h {
    display: flex;
    justify-content: flex-start;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
  }

  :global(.pad-v-10) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .pad-v-5 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .pad-v-20 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .pad-h-10 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .error-message {
    color: darkred;
  }

  .label-v > * {
    display: block;
    padding: 5px 0;
  }

  .label-h > * {
    padding: 10px 0;
  }

  button {
    padding: 2px 5px;
    font-size: 1em;
    cursor: pointer;
  }

  input, select {
    font-size: 1em;
    padding: 2px;
  }

  :global(input[type=checkbox]) {
    margin-right: 7px;
  }

  :global(a, a:visited) {
    color: #3d63d4;
    text-decoration: none;
  }

  :global(a:hover) {
    text-decoration: underline;
  }

  :global(footer) {
    margin-top: 60px;
    font-size: 0.9rem;
    color: #333;
    padding: 10px;
  }

  :global(input[type=numeric], input[type=text]) {
    min-width: 0;
  }

</style>
<script>
  import Diagram from './Diagram.svelte'
  import { packer } from 'guillotine-packer'
  import { getColor } from './colors.js'

  const MAX_NUM_CALCULATIONS = 100
  const units = {
    in: {
      long: 'inches',
      short: '"'
    },
    cm: {
      long: 'centimeters',
      short: 'cm',
    }
  }

  let fabricSoldBy = 18 // half a yard
  let fabricPieces = []
  let fabricWidth = 45
  let allowRotation = true
  let errorMessage = ''
  let fabricId = -1
  let solution
  let unit = 'in'

  function addFabricPiece () {
    fabricPieces = fabricPieces.concat([{
      width: 10,
      height: 10,
      id: ++fabricId,
      amount: 1
    }])
  }

  function removeFabricPiece (i) {
    fabricPieces.splice(i, 1)
    fabricPieces = [...fabricPieces] // update
  }

  function isValidNonzeroInteger (i) {
    return i && typeof i === 'number' && i > 0
  }

  $: {
    function calculateFabricNeeded () {
      solution = undefined
      errorMessage = ''
      if (!fabricPieces.length) {
        return
      }
      if (fabricPieces.some(_ => (!isValidNonzeroInteger(_.width) || !isValidNonzeroInteger(_.height))) ||
        !isValidNonzeroInteger(fabricWidth) ||
        !isValidNonzeroInteger(fabricSoldBy)) {
        return // ignore zeroes
      }
      if (fabricPieces.some(({ width, height }) => (width > fabricWidth && height > fabricWidth))) {
        errorMessage = 'One of the pieces of fabric is larger than the size of the fabric you are buying.'
        return
      }
      console.log('calculating', JSON.stringify(fabricPieces), fabricWidth, fabricSoldBy)
      let fabricHeight = fabricSoldBy
      let timesCalculated = 0
      while (!solution) {
        try {
          if (timesCalculated++ > MAX_NUM_CALCULATIONS) {
            console.log(`gave up after ${MAX_NUM_CALCULATIONS} calculations`)
            errorMessage = 'Could not calculate a solution to this problem.'
            return
          }

          let uniqueItems = [];
          fabricPieces.forEach(({ width, height, id, amount }) => {
            for (let i = 0; i < amount; i++) {
              uniqueItems.push({ width, height, name: id, key: id + '-' + i });
            }
          });

          const bins = packer({
            binWidth: fabricWidth,
            binHeight: fabricHeight,
            items: uniqueItems,
          }, {
            allowRotation
          })
          if (bins.length === 1) {
            console.log('bin', bins[0]);
            const items = bins[0].map(item => ({
              width: item.width,
              height: item.height,
              x: item.x,
              y: item.y,
              id: item.item.name,
              key: item.item.key
            })).sort((a, b) => (a.id < b.id ? -1 : 1))
            solution = {
              items,
              fabricHeight
            }
          } else {
            fabricHeight += fabricSoldBy
          }
        } catch (err) {
          fabricHeight += fabricSoldBy
        }
      }
      console.log(`solution (calculated ${timesCalculated} time(s))`, solution)
    }

    calculateFabricNeeded()
  }

</script>
