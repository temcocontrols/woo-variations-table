<style>
  .checkmark {
    display: inline-block;
    width: 22px;
    height: 22px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    zoom: 0.8;
    margin-bottom: -3px;
    margin-left: 4px;
  }

  .checkmark_circle {
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: green;
    border-radius: 11px;
    left: 0;
    top: 0;
  }

  .checkmark_stem {
    position: absolute;
    width: 3px;
    height: 9px;
    background-color: #fff;
    left: 11px;
    top: 6px;
  }

  .checkmark_kick {
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #fff;
    left: 8px;
    top: 12px;
  }
</style>

<span class="checkmark">
  <div class="checkmark_circle" />
  <div class="checkmark_stem" />
  <div class="checkmark_kick" />
</span>
