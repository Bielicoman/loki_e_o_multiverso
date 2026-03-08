import gdown
import os

ids = [
  "1qfY8_bkzrwKpOYeDb_96kFGvTxaYMQqP",
  "1AHul04b3T67NHEbNNJiQE_nieXHd9kK5",
  "1AhJ57p8S-u5hKWcU-iPjQf0FFLg2PfYL",
  "1sl3NbInpybGtzJ0GK-pXqZMsnLIyZxkC",
  "1a54NO2ElWkNmUdWWu5a6tCGKVMGZ2Mb0",
  "14lyBrOmOhaTP1_lVD3AVKxpVHxRvGr_K",
  "1yYaIMK0tUbDv-xQvIbE3rMxobut0QqR1",
  "1JlCzoQ0MCksDPXfPlWOydZFk9LraL7N6",
  "1N_DPzQLBr4SHZscifz5TGlOAusc-I_an",
  "1SJACzYMpW7-gAY2ff9em7wjEddtEzzBI",
  "1827nPBwmpIzdgFzaDTQgu4ZE00XbFNJm",
  "1IyDAN_ADKaObmSvSpleogZOckQ1VlYPq",
  "1VZzMlZ6GQ0znrjXn1vPkbxYAusztRlg-",
  "1HznOWxFV9DZdEpy8uNMcm1xH1cPfTUfZ",
  "1iOfyNuE4JF-zNKBVBi6jY7OFRq8KcKWl",
  "1lIRXuM9TOZ8KO_zTDs3z9vb9FaX6B-Tf",
  "1qKeh0u6cJc6kKKxl3sntEoY1wFt6DlM_",
  "1jRFn_jPNE9c2ehArw9KrKjEa7FMfdovR",
  "1xjoVKzrMvzBGrZZen-SwYkgbOsnNP0h2",
  "1VQPK-4kskk1ZTOgtwMyb29HVmfn3Dftn",
  "1JxKuaDU0Dh1PXnK4FrNSycArG9Dm9vbx",
  "16N_nIZ2vwebyMjBcC4CKiX4cx7a5gFCI",
  "1GafOCfARAwhXDydXiSWiv4arWNvqdGu5",
  "14yaOz2b9QZWb13vIJiilD1xmkjatDWPB",
  "1-_g_ZT0A4Hr8v0LB5rjA-VzQKfMEVvCL",
  "1TDzGKAvv68tfZm5zXZDr1kjA4DVsrgeF",
  "1J1G_0oyCk9eb1niMgkpqAbK0Y_EkZtfa",
  "1kuL0yhzx0bQ8uugZyYrZW2S-20qg1kDP",
  "1cULp6gnCgnhdAbFRmfgHlsVa7Jj9zGB-",
  "1kn2EZQZlrNpT1f0JjZBf2UlVV0aRDBRe",
  "1M4XzH7RsQ-TohKijQYAUrmVeF3MReKtp",
  "1gExu7vgr1PpQqWI6tJhQ4MQ0QoYCh_kb",
  "198_OQ1iu9PxkppNimb59P7bhLSEH0U7D",
  "1rR0gSKLhG9amRsxljhsoxe2yL2q7xY8l",
  "1GLYaFZci4E_XnujCyvyz_LcEzsrX6_uK",
  "1f0Lyr6CGgLaAtUDtYc3zhDR0lQfoQTLr",
  "1Ta_CNfvXusn2KMQV9v9Q6gupalfXD--s",
  "18Qtd2wVowAXIFfKtHK6mI8Xb8ooG4k4w",
  "13pzsyJcglinB3nteQJ0WvvEEcDGSxuiY",
  "1iibTGG483yLa0jgGchWrKWvuFowWYFVt",
  "1oiITVCTu6ea9Whnq-LVW1aT55OGV4xuw",
  "1BLmHINyY0idaBO6x7dRniedEfvd9dDeM",
  "17a0OCwm4FwxNaH4oCwMJg0HyeC0VQKwQ",
  "1tTA8talg58cQ2r-imgg8WY1OcwDRsC3y",
  "1bRJmgXFuL4v0y1-a7kvgyPcansObjWmN",
  "16hCL7V3_-okzs-SReFPIFfL860G40jRf",
  "1GshVOE0N9SJgotGc7xy-PHmlMl_P0xo0",
  "1Nk9dmwXWx6s8rBWKkGqC5nG-eANjyiJw",
  "1aZwuMCUQfXY0yXnqFsUCd7ZdPGQ3-TQW",
  "1t8VGYvNGcDrB5XOBUc4ApYXIyU3i017F",
  "1MIaoYqZXnfrNM6C5OmNatgxjqVe8tM_p",
  "1YpKs2G6ldGZ2xllfcrVnCoqepZ_ixqkD"
]

os.makedirs('public/loki-images', exist_ok=True)
os.chdir('public/loki-images')

print(f"Downloading {len(ids)} files...")
for i, file_id in enumerate(ids):
    print(f"Downloading file {i+1}/{len(ids)}...")
    url = f'https://drive.google.com/uc?id={file_id}'
    try:
        gdown.download(url, quiet=True, fuzzy=True)
    except Exception as e:
        print(f"Failed to download {file_id}: {e}")

print("Done downloading all files.")
