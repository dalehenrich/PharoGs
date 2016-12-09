baseline
baseline: spec
  <baseline>
  spec for: #'gs3.4.x' do: [ spec
        package: 'PharoGs-GemStone-Tools';
        yourself.
      spec
        group: 'default' with: #('Core');
        group: 'Core' with: #('PharoGs-GemStone-Tools');
        group: 'Tests' with: #();
        group: 'Core Tests' with: #('Core' 'Tests');
        yourself ]