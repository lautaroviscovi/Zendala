# Zendala Customers

## About the application
This is an a test app for [Zenda.la](https://zenda.la) job application

The backend is built in NodeJS using Express as main library. The frontend is built in ReactJS using Redux for states management and localStorage for set and get token provided from the backend.

The application can register some customers in an account of **[Openpay](https://openpay.mx)** and save a register in **MongoDB Atlas** database.
Contains a landing page for admin login and after review the customers registered in the app.
The app is secured with **JsonWeb Token**, password hash provided from **Bcrypt** and validate some fields (name, email, password match) with **Express-Validator**.


## Deploy 🚀

The backend is deployed in Heroku and can visit clicked **[here](http://zendala.herokuapp.com/)**
The frontend is deployed using Vercel and can visit clicked **[here](https://zendala.vercel.app)**

```
Credentials = {
	admin: admin@zenda.la,
	password: zendala1234
	},
```

### Refactoring and fixes
```
- Clear form after send values
- Optimize responsiveness of table
- Optimize pages transitions to slower
- Use backend services before controllers functions
- Reorganize folders and files in frontend (principally components)
- Add user dashboard
- Json picklist with countries code, states, cities and zip codes
- Dockerize app

```


![enter image description here](https://lh3.googleusercontent.com/1zhgy1Qns4lFTmrnvwNzrcsJkFKQLfguXbW39QPSy3r-mvHI4gs6OZ3Q5k9COMyHb2CTvyUmF7Ka3mWZ9-GwJ13S3zX4O5NYSfXdJxvZ2BuNZ0DdkNVu6FwRcuykaKDIpqMz2Vqhk6CAeDmjrteVIMjPJA3aloLewfZzBuJfnAVLoJqkPKQebBNnvkGcGXK6w6BHgrYcmWn-F5EppSE5BJbES5lpG_PJTRRZri0cC8h0iB-1da5U0u5cqL86c9jXAo__2I4xZepAoaYMfsXC4C_cVGskJBnoWNTdOnKgouleh-0CKsg6YUWYJ-OFXSOzZ22VG4SFKGMCUL1MemB6NnQ8Gm9q1hxzd-tHlmZaM3k2fXKRm1yXytw3xP1Lm3iQnENprYwYUqpXHCs9WbAjN_vTDvboSgZkDLNJE7W81Ae-_FprS3bEmB0-hmrec9_2qaN5g_8lHLG7BuTaFqQ6lzxKN-CeB0FONEQCFw6yB7xpOz5V-0PZEDvvdTVchhktjBfYOhOrGAA2pfUuazjunIirH3xdeBzsgYE3UDskSm_7uqzoKIS0tV5Jq3zJUOXSHs_EXjROvBSz5Fc74NeW6lfT0Iwvz_67ubc-LpLclR5czlBZR5CafRFsukeTPoGvJaJEgpiZADyXim7zTyMRq42oqaAde3mhsAti5ovEVJpg0fL5ys45bVziqabu3nLtRkiCSObqnmM8IgRSVbH-ZkUE=w1197-h748-no?authuser=1)

![enter image description here](https://lh3.googleusercontent.com/BVVgLWb0_XVOvO7fAhPfsAhOXU-WiFY7dgkoRCTNSW1vsdPzzybX9XdE74wL9DwrhMrAdlykNG1_FoG9GivayQQYoCk1ORiwMpsXWtVzGyZBMHH6wkrbanAJCMKoiR__EicWgMq32lisaGVrMwbs8REtJ2NDQmiDtry5bVQeOTHZ48Ig5kr-yzOnLXWvTrcFBvROE131M94WTymy1D8sIQKcTAnovTGWVE3lECA204StDl3YIyc-rIdf9igt6Vw9yfut86O4H_JcXBGvrQ_EXWgSMW29QEPjQJs6-3UNJGMQcHuR7JIqE1jvFml-YX46sJ84HlPvUrzYKpruyYPTLTtXFdZ280rEhhHXcMod38XHQw4-N2Uz8-3xAan96QXpgzL_wW_931a0WPrKTbOyPwBxktAcTLrUdPF_tEu1CuZBBbGkmsqkyg9zZFHoy1v9VjAkY0Cs6f9Dm4gTWyImBPqMT4ZQl3yiMmB4Xe-wmL7o4QW_mJW7u7aAoStXnUvyafHSwGbU7opfe2Pbx-6LKKTke0PULuvU6IKHZuzzWBwMW4FHh3w_I91Z_Oc5J2w_SAxoJXrmIBGmDLvYA18K_ajjGU8ScTyknZLJc_Y-JmID14B7mtEP9ZrcHMPlxCXoG7hTJQ8-d-cIUr9A8YuLekBSmLTDCjsHdn1_Rko8GEBnjoPqp-YmfwBJWfKqmAXFVEhUC_hCPiEzWFd7EzllOfYv=w1197-h748-no?authuser=1)

![enter image description here](https://lh3.googleusercontent.com/KaR-HecQ-9Y8hLeSso-eT8biKIdo5mkwcrvXGTI_R6JJ58pL8JqAChZp0hS-dx6kz8h1E0Fh5HPYfvJJUZX5oHyr4ohZwOkEmRdxEViGDoaJWhWX8sbGM75RL386NE2sicVzOoWo9lY7zafv9SgdIi5PYUVFImR-O7PJWXkH3Inzifl_SO-9JPLeQVbLveyK0iqrRr6IWKPr82cgD4TSN2E7poDelLmczv2XULF8DUj3535o8be-jOFjgYcRnf-_16Rpo5hEnbNe55zVoDuVKKdRu8Cqkr_07xKqLjuKWlDIOOfSulJDmqCf19tksIJrFttNTztvFLZsSrG5i8yqY25myPr4W4N8DLTFFl-bZQlpNlhV9FWFXS37xGeq1umTRmCVthxGWWl3yWOf4N-9d6GgRfsnYQg-BZe47LSJFIikXvchWSK_iv_dmQNSVHlIU1-VPS92UBxtElcSjxKXyg9XdFmfc30aYnOrnRp66JYvnlwOmZPsbal6DwlXmVUseiazglvFTM7V6x210Xk0ehyoQz6jne2WWENeRIWqgX-29-mjSHw8VbxDxE84BDKVBw3Ps_Uxget1H_QFZytrEm-VbZwYq2KVJ0N8THtOAxTfMV6W-2DGUmT3MO5jE-AqkXdSE_RuAMHodyTeIaczd9NkiWU2RXmcfF_lOofl6vqdCfesvjT5H_osimgO0ZXpf98ihrEwn5HGsj-nQM4K0iGs=w1197-h748-no?authuser=1)

![enter image description here](https://lh3.googleusercontent.com/ztnyyA8YD5OBeoGbhOnZ3h6NcXVji59Jzu08-o90Wkpuh4hJ9u8OGsfg2yd0vK1ATSztYuonIqDk7ILc_aNNcbvbr__DMKKFadzNeMNzDwQefOfx8GVulkSY577Ft0IwX2bgfVdQtV3fVAbfHTiFQnhUOsySw-vevisXzzOxmIugK4WhZFdXh05FKcwwLFixvu-EUpd4IM-IOFztKM-3iTPBp2AN2068UHsq9LsXRoO4hoz33lpA_6slsC1s1Q7yj2grtl6X7mlXLOp96M_kQCp8v_SKWWLbbHZ8DdsZd1F7lBho76F_VZd2koAFw4VrD1byxT4NIO8fCYAoxvS5uJJ3CN9T4GpXeS-zG6Q1R8IJpOgCj4Hh6O6mKXOUC9Txp7jcoIhTJ9yQ8pQKjVrnGBvqeFpYXphAL45l6-GcyE_96BuxVAXVQa1n0xPzYHwjXukXJF05-vIcz7_3-kWQZHRs3onws2AzUVnAKCUANlReD9Mr3FxFxcNf1feYfw_Chf7T9W9ij4vB1QRA5cE_Uisn59uqS48XdYbwHhqv2HqlebSM1XaFBcht0AbyYYvZ4DroL-cIVvlkqUi32cQc6lCqlLiKJb4IagGiTgS2EEkmUVLtxlEbVnC3uED8xDKR187I8_pdD5x0iS-JHr8Pod1rcJhwqKL16D3o4ZsdxSDM5QHWfzxan2hfvJQebzYDGBa-7LVyn-hhopD9rhf4r9sT=w1167-h748-no?authuser=1)

![enter image description here](https://lh3.googleusercontent.com/85B0t_cJ0G3x6gQNlp_YHwGuM67lEB85wxw9A7pRScqbUx4yEBoJDLEdMfZ5pJppuiLaHLn-kV0nfNKkkW6ifZY_VJUDYUkxsllDUzV77qTdVPlJdqZQtt2pLeW8X6uyRNDv823elHURQtiv7p-_JbA5A-3YH5BL5Ac7sON8v-qRw5mYZTg250JCCzgkdc83B9-Sui480xRrBgB4kDXvC4TqVHo57eaQB9XUKdTFRoBTJyt32mXIhqMfZ32iN2I2FX7lcYno_PoT1a98s0G-WClbix6Fbh8wXq0eJaZ8mqQcFMsuSgmXti0bWoIUwQQOIiTxaIwLMqLBYCectamvn0BijUbPDSaOI_Eg0ToRQqZwvM_xw1tLvqTuVjh_BiweZuozw96XfJmvy5Uhbac7vZDqAzrb3jbadubfixGCVB6ieGT9IZTtuH3hI1TEBHJQ806Pu57HmfbXnEfGlfh_zDMssEvpeAkRA4xSUnCojgce37W4BMAN5ImJSTzwIcWtx2JNRTcZbIO4rUt4qe0XMKvjlXRepzdlnJfQJSt85jvWlyTeUixcXaW8glB4uNCkb2FwW9F_awlKmjJBZzReB9PHWne2lgH_CA4uwIOsoSrEZ8YuDU2oM_pua1chrnniqxOzjFfFD9IOj2BTqbV_eUDrjXah_zyYCYTPdOIFkDqLHrmgrqFW_NyHAhtrxNBgBoPD7xpChv0Uxo0xuL9fzn69=w1218-h369-no?authuser=1)

![enter image description here](https://lh3.googleusercontent.com/DxODwpNEbFmmGVdOxXYsc-ZnxEm-697oJWzz91FD39flVo0VT_6h3TDvVJQsXb5rlosNK1QJQ4j_1qMGuT4pUzZZZRFBjcfGusIehAB2jMyrc6moiOLqQdoXmbipTr2w0lLNU_2OxctckJkUPo3IAoBtHiNU6zk788oEQdXG1I1fjpvamR6Z4ZSWsGdOhKlZgXbnH15pSaMCh03Y08ZOviSPnGePeoCpUt8xwBhGu419ZYNUcjakRLOihmqjrXHQrBwtR6SW1cwJXz9Hm2_REl3hiWIzMAz2N04bOPNlDKSj8ip1cd3q46d9oxKhToMZtGWNvmkzG2adHWOTe2Rrtl_6L2ScMseTm-jSk69HrtjUitLzSpQIgaDn9FT9TBYt92l9pIihF7xBjqnflTeJ_b5GJjNz3v4Js7L9QaZO8bSPkCbHzw1qzp0wmAMmPhSfyISXh7HAbYvjzoLwePcHjcTSA8mKXXi5cDgfMgmdrchLxrN751yKEi0v0UTM7LSF7xWUWNE9rJRKpKIWf9c2FPLHFYwySG_zhik4BJToFw5kCRQ1QdrJGGe_qyEUJKPnxytlXGuFrRvO8mUo4Fe53Hhxg-UlPThcyR3bVLQHu5ltMoIbXp38sSu8y1bcr_0zXSLjOb4rde9k8uV3DYtRvdDhPRjlCAn6INxubLSaGZmAlUZk04qS83iNU5O83tji4xwKSZilSkIV2B59goq0umNx=w1221-h390-no?authuser=1)
