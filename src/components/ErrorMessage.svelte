<div class="error-message-container">
  <h1>Error happened while downloading data :(</h1>
  <button class="reload-button" on:click={() => location.reload()}
    >Reload</button
  >
</div>

<style>
  .error-message-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }

  .reload-button {
    width: 100px;
    height: 40px;
    border: 1px solid var(--butter-white);
    border-radius: 5px;
    background-color: var(--grey);
    cursor: pointer;
  }

  .reload-button:active {
    background-color: var(--dark-blue);
  }
</style>
