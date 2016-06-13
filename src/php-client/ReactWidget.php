<?php
class ReactWidget
{
  private $widget = '';

  public function __construct($name) {
    $result = file_get_contents('http://localhost:9001/' . $name);
    $this->widget = json_decode($result);
  }

  public function render() {
    $widget = $this->widget;

    ?>
      <div id="<?= $widget->id; ?>">
        <?= $widget->html ?>
        <script>window['<?= $widget->id; ?>'] = <?= $widget->state ?></script>
      </div>
    <?php
  }
}
