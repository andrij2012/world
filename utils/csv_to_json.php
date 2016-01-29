<?php

$inputDirectory  = __DIR__  . '/../assets/csv/Ukraine';
$inputFileName   = 'UKR_adm0.csv';
$outputDirectory = __DIR__ . '/../assets/js/countries';
$outputFileName  = 'ukraine.json';

function file_gets_csv($input, $output)
{
  $csv   = file_get_contents($input);
  $array = array_map("str_getcsv", explode("\n", $csv));
  $json  = json_encode($array);

  file_put_contents($output, $json);
}

file_gets_csv($inputDirectory . DIRECTORY_SEPARATOR . $inputFileName, $outputDirectory . DIRECTORY_SEPARATOR . $outputFileName);