const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      "https://lh3.googleusercontent.com/pw/ABLVV87OJXl_ZM-dPWsFmcL2VFOmRKj_CeYfEWvg54pvn7bDtYM58l6BWRRAzBJ0wN-YUId0xuU-8nCZxOk_GORmLxN3wz9XK20dd-xDBozmQoJN2VTxY3WtJDPK3MRWyvfalqSIMoTnww0YYZL9jqHaoCKMiyK7gDltNerkM_QSbKZKYAKvbzhxHB83X7wxS0AB4OtSDidSY7Ire-hwcahjZTNIOfvml4VrIU1k9RQgY2dHJWPFlzQHhewHSJGUQwfuTkcUpFcdtRXARXtshxUuZs7il9PYwCbMQY9wJx8sEsvsIKlE_rfi6wZpVvWxK2peYlI0toIELAmZSJyaAng9E-AmSL5V_G_8GuU6y9350UPBq9Vh0hwQHomF8OrkOjq0AOFI9FK73OkaUasa6bTADacfDgtWM9PDeIZ1X42I-gv2C29wc2ZGvgeDe1LZz_1bJar1rv_TqUIcDPWPPs42pBGb5GM_oPiRadab9PWqrBKJfcJmdWTfk3q369LJX7bcZir6SqZQLkITDPXYc7sSCd5ZLR0mM50GplgBSwO-DFT5ecKJqzAqcavwL7fZZLtSLXmBZOJ8RHPgwoWaCMuYc0ZBI2lXZRQm_BOvkaiFQoMuFtg5SG03lLjwU9805rwUPgP8nKIymqiqzq5JySfRJ9h8_ms4YMx9kx6Gye-JVU64drZbjhnCkNPFpmmJE9RsHxh4wfBBUKKx6fmiqlpnjDjN70OFO9NyuJSjOtE8xKz6M8rtdasvjLuNMsMl9PYo5qqkq99gN1xwMBM2owA76840yEpgbhC7TFqjtZLUoOd0l4OFCdz1LpmtuJ5TLbAOroeMErje9jClKwNLl3RJu_73px5ZU_DMAvO62hfKd9lXebXTCbi4myUXFxh-zRwErt7OLN3zdb1opiomX3RjwpXgbw=w1024-h682-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/ABLVV84xdOJx4sVy8PtLgwnF8E8HVBnmmsRMlpckz7eDXC5JJdHfqjzXjzZmIEKzp6leoYWMdB_eymHoxFP4IuD-luCe_gImkCKqSJWvWSrPZc-DHg8fYwjXLUTaV8LoAQocs2sNKq0Th9nEzGqfhNSHj07Khii9_-0V5dHnl4vvx4r5sOjjAIkvArA1qdV815lQs-RHxcJsX6fua9KvcNmmBCh-4qY6JaRwcTX_C1-67u_P2DQGzxeHsDPNvTH3alDsvSG-281LsQHUShBXockX6cEwxE08gR0vwCSiDfUpwgVamec7zxJJUp3uh6uhdiyRKcX74V3FfhsgRA0acOntOJJC153Rvwe22es_fX2OxaOe-XAc21TocYeNRF6yj-BnNRVLqr3YQqupvOy4Lx-Pmo4ZTC3_F5Kx6np8qt1PFSRtm8MaohBM4vpK1yGqUFTkxEvy_K3iKFl1TADJw1Wq98EcU8B9JAb_0wc_M2x0mfpxhiEmnhUx4mbFfZv2M-8F2Ju5aIqrNcba5o0UgIhAF2KHA1UhT7g4RMgt00sQ29sGn5Q-b7ETXihzhe0AwratD0TjWr-dzwww2-U1yhDzXVloq5825cFpLFDwDEJtnFahEfPsQzrD-yTRRKRgy_efEI0TOJ9NaSiTldLZjQWxq6xnGudEE2k0NSRi1AE6Uvnferkzi1-zsI7ROJfFMVexnwopc9XHdY94o8qnaXbit_EWlnAj0oysFcmoD42lkDeXzf27uz_ZORK74iBaKBGng3CwZnG60A1dVUw0OjvI0WHTJiGENSjCPorZaHbEmJhTaTMcs6yljUwRkpYEKpvnpGWLtEc751nXFv22hu9F23aDSVjfe_LyUT2v3UQTfc_EFnUTiAk3MH9LoOQgfjjZRJ8N3WzYYKGPk_pYMS965mm7=w1024-h683-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/ABLVV87xIMHjWD98rHyJiO0fp8fRYUz1ywS-3nsVxsZ19o2vwmoj0wmRPLeMcpwSTrkVBel6CCldgzX568LLqb9IXhcOehRtooLd3n6xXjGJcLldvxzINvlINIJUfJDftJK_qU_7nTi6qH-BMgalpO9Z1MwaswpccnO_z3jmewOcEvcjNeVR8-BU8QOARXAJNiuoxszOr_0kSwy8h9dW22sc2fXlCmbcohq97dH3RxhyMYt0BOatHAWbjL_iXXOBzbVYp8jmn7YESYDgQUPcDl4viQFhWC2yp-_ZaTImkQYUQHO3XsvhMGz8Hn8MYglqt7MTjlhTjiXjE_IVfyVVxcf4dAnDv-_1xgRvtWWUXSxYDulIL8ogvOcjPSVXMYZDClEE9XvN1Zgp1Hx8roip3BGf0vF2vQowZNlvajZhUz3xlfFmWVm-4n72axCF4BIgFoxU0nOGftOH8LL_dZ1ZZ84IsnTdFZEN7ubjNfA59TMBrn2ahaN1enkXI4K2uDGc05gk8bPLEDGSkcS87dbLOfgiMwsjDpoNfZeGYP2OjrXolb_fHMUqtYb5ABcB91N2-S9ZGeLTjJAPFUMORCmReatZqLF8uscxVbWxYU9plQ7BxGItzDwCQuX2HZfdKYF8hCw5SP3ILFfC65GgAta3lAAnnf_Xijdds8KTAcqU9XrO4Go3l2i2UTBm2CwFBUTRTP0coF_9sHqa8TJKY_bSi6JvItL7AAvPL7Nu3Y_uKowL1mDxOsQswXR33LAYWbenfkuvAK1pnPfEs9I4J3BNIGotdIJNsKHfExt073Bc_f6avowni8On3mbG3P4-EuBu0eC635Xfs-V4RoxS3NWTUqQyhMTDYt0-hM0XOWWcXo1xV_7y7dpZTX5Li0s1IpTaGQX5J1nGfNYGll8d8oAZ1iGWviyBOA=w1024-h683-s-no-gm?authuser=0",
      "https://lh3.googleusercontent.com/pw/ABLVV87GzQ8VMXsDqivWOm1vFZoT3EK1LWWcYZNFTaBIWp_voSXYlDwzvaN12QEkibNrTVuSBnmOu8QBBCAkPbrMRJiy6g5piHLjjlE9qI_P2ttcFslyfJsPYMPr0widWNy2hPweZWvCbUZgTutBqA5Ra9r3yIszJiIE1us6_wS3KUu0VI_ZjjQIE_V5c3lG3Gt7WNm77ebtUUXU6PDr7fBijAQmIDNJM62Z8x4VlegFZfZU5LRpbETDDmAZQB9c8G0NNrIKRfAoRMjC3RHOVPP3MPnCAgG9DDIMbQXwL5PY83JTPiG0tU_D-YFf33gzuYhOdXVOokEgZw8wKZtQCDhi3OXn7pLHDzXUPy-35utO_rmNhEywnV_tXrnBwQn0EmQaJxwy5oXaex0EGbsKKecN3cAZQfkmTogwpYdyFDJc-4X8IXHoWgtOwRkl2uT0Pt0FgK2lsqF2RXlwPbelqkbMjVkP5JoGRZI-6JNqPKeEessqV3SPAc6SEFjdnp06-qpKgQDBUGQJKTwz-h-alVCeB9eWeAAcKJ19XOrrQZeBQKuvnaV5iWRBJZzgDhpTVL5VYV2A67fjbWZi-AMFEOfTAxnmLj7MLBTmTytvlVLII7MKDKHQuMPEPI1vM6VAEFnTtRbE30i77O7DGsL7L_Q2kQ61lqcq2x7SNCSpNmPnWlEjKcHRuBc1JZNC7wvLj_-G3Ax0xeiOMYUVvExJHVpTb-0bWlS8J8q2D4KvOcn5KOmJQRs5Oj9idd-Duwfe4QQ0nL28GrQ9GeJ3NrNpsxdeZ6cxWm3EIkEIThKQsh-2OzVntOTEbnT1TQh8KRS-htQ8vuO2sHH8EdjWyedUirTCsOnQpNGjHUS-uL_fyUREZTRxlA4t1RKKlPz980C4SJ4gxJlhc7KjSKo9Vgb5sdoPLxEg_A=w1024-h682-s-no-gm?authuser=0",


];
    // Nomes criativos para as barbearias
    const creativeNames = [
      "Avaliação",
      "Atend. individual",
      "Terapia em grupo",
      "Terapia familiar",

    ];

    // Endereços fictícios para as barbearias
    const addresses = [
      "Rua Arthur Ramos, 369",
      "Rua Arthur Ramos, 369",
      "Rua Arthur Ramos, 369",
      "Rua Arthur Ramos, 369",
      "Rua Arthur Ramos, 369",
    ];

    const services = [
      {
        name: "Julia",
        description: "Mensal (Social)",
        price: 140.0,
        imageUrl:
          "https://lh3.googleusercontent.com/pw/ABLVV87FRnzyOftjGkHG2OAGs_-WozQ6T8UbknPDCPaRFWhf-TetNMUhvWgX2TmIIXoquVRFJSOUkDJzarC1ZHFjhv4uggZq7NlmGipLN2YlBobwJDC2wSxSr0jXDiySwt5--uecSJsEXzQv6rveAyHt-7FZVkGi7TA-UEp17hOkpp3CpnkPK_PsPe1OkRYJqBu2sGKQyigNgNtMP8-b20w3EFbhOXFo2-yJVsH2d0Q-o5rjAGXn-q9Ckme-RthApopeec9ug5hz6dtkOp3fOElTH_aAxgDvqfjMiNA8HUfVW3zDh7PQY8MUZuG8LD9cdvQUwXpcwT2qzf5eWh6oaCkvt8ofQbYR9wQxEz-anIfXhG29QbhLnlGX21YE0ubo4QOup6wEeclf0NkLIX_x2SMdaCYlKLpBdPelPYn4iFFkJTvGSGr8jk_ScH3n-JO7XZgKvkcC3cTnASCprCmVv6OO4zdfGIy7pCOWy4kkVKdv285Dn3YNuSefcidV3yIhAvSkYXJ68n-Fn6uDZG_YliEbY0sQqXSS5m7Y-BzUL0mJMX9lcTBfgr9-K-ech6gMUeEpx8MFmQPH3Wfqj3OA665_GNf5t1tIUyAECxznU3LQHk3aUVMmy_zsTNBL3L1ilCXsE_beNeDCNKkEaLi_y4eCTWilUw5Uy59LmpmLGv1_y2yrBlmBkr77P38-UVPTnHMBFX3oddkgq9A-sSaqWZjw60kVl1geUsZXKPmdkFFm2iex5sL3VAGzo0bcTbgwl1B1lQiJyINvFZlePd5DrM2o9hM8HS_zluKk-bEFFTX3Si66zxuKi_OedL8FT5BKid1ad5zDzgyzNF600M8vuRRfMLaEFvgSZe1X_usq30bEoz3GGvLkPr9J80Ck_rZTgDyVKLIwJdzshOfOS2ucmzII5pGrug=w938-h1408-s-no-gm?authuser=0",
      },
      {
        name: "David",
        description: "Semanal",
        price: 45.0,
        imageUrl:
          "https://lh3.googleusercontent.com/pw/ABLVV86lKdqdT9vmBzEwH0dpjFd_NmKhgNEwOnnGhjBLvt5XaXeHp5eUkAV0TcA9s2JqjtZQdtdyyLWD1ifrboTTWZqkz-i8sql3NXiGmmK0EOftVoM7WA1YaMjnX83LOgXL3QJq83ZhrkqlY05VHwt8Y6-ic0cH1uphONVvpZSL3S1Ev6ukXQIPskInFb1rEYe565GDnHd1zRw_BGTiVu07jKtbHv8bmhwGgvqsJTB1IM5CNvxaax6HI5KzNfcZTC6VoW0FY5DV7TMfkxa65-ALMd_GuN6Wrv-OGM84crNJ60Silj03taW28hWBVm05fymbz405a6HgzdwNT1MkfNVVS-SY_hBJyRNYnK4zX_KE-LOm8YvTLVXJk3PKlW2LpW91dKfS8VMPfNB6DUG0zJc9H4dWMNX37wraLURqOPHGg8CabVpX0fGuD62fP5ILjOduw9Jx096jhiqhKaU6SjzhEN5vjH_mPPVUh_7iV56q3e0JIRzYV8iv-wI4k_5GEyDSfIjHQezORbYJjMDdJU93GPOJSJwCUKryQV-1Gyn1IhMBwn3vfG4MfTz6KeSqc9uWeVw8nMGaVma2cZvURMUeLIZlwW_GEgQVuagzZQntDv1N31EQRc9NnmStnGtDR2EreNXBRp8kz3EKLOuGEAoKyjtc7G-eMvfgvWaXecfM8G-YWVhqe63LzYzUhOTEeaVg04drooBy103Jf_gcMhnXDoEcF6nJl02eRkMmH3w_PM18ez16pihuAkAOs75gw8h7AIY1w9hEO1VrknVH2oPibtgWBjbatMA3LLJeWlvNMThchK4Ula6GMy0IV4B9Rw0142bdHOaXIrLzXUB_6YaYXpiyZfa1MWKT-RFwakoUyRRxhwLxBVTo0qVNcNa-z3HxAv8rWFmK81UnGegPWj_-gB_OqQ=w800-h1200-s-no-gm?authuser=0",
      },
      {
        name: "Jennifer",
        description: "Mensal",
        price: 240.0,
        imageUrl:
          "https://lh3.googleusercontent.com/pw/ABLVV87FRnzyOftjGkHG2OAGs_-WozQ6T8UbknPDCPaRFWhf-TetNMUhvWgX2TmIIXoquVRFJSOUkDJzarC1ZHFjhv4uggZq7NlmGipLN2YlBobwJDC2wSxSr0jXDiySwt5--uecSJsEXzQv6rveAyHt-7FZVkGi7TA-UEp17hOkpp3CpnkPK_PsPe1OkRYJqBu2sGKQyigNgNtMP8-b20w3EFbhOXFo2-yJVsH2d0Q-o5rjAGXn-q9Ckme-RthApopeec9ug5hz6dtkOp3fOElTH_aAxgDvqfjMiNA8HUfVW3zDh7PQY8MUZuG8LD9cdvQUwXpcwT2qzf5eWh6oaCkvt8ofQbYR9wQxEz-anIfXhG29QbhLnlGX21YE0ubo4QOup6wEeclf0NkLIX_x2SMdaCYlKLpBdPelPYn4iFFkJTvGSGr8jk_ScH3n-JO7XZgKvkcC3cTnASCprCmVv6OO4zdfGIy7pCOWy4kkVKdv285Dn3YNuSefcidV3yIhAvSkYXJ68n-Fn6uDZG_YliEbY0sQqXSS5m7Y-BzUL0mJMX9lcTBfgr9-K-ech6gMUeEpx8MFmQPH3Wfqj3OA665_GNf5t1tIUyAECxznU3LQHk3aUVMmy_zsTNBL3L1ilCXsE_beNeDCNKkEaLi_y4eCTWilUw5Uy59LmpmLGv1_y2yrBlmBkr77P38-UVPTnHMBFX3oddkgq9A-sSaqWZjw60kVl1geUsZXKPmdkFFm2iex5sL3VAGzo0bcTbgwl1B1lQiJyINvFZlePd5DrM2o9hM8HS_zluKk-bEFFTX3Si66zxuKi_OedL8FT5BKid1ad5zDzgyzNF600M8vuRRfMLaEFvgSZe1X_usq30bEoz3GGvLkPr9J80Ck_rZTgDyVKLIwJdzshOfOS2ucmzII5pGrug=w938-h1408-s-no-gm?authuser=0",
      },
      {
        name: "Debora",
        description: "Trimestral",
        price: 320.00,
        imageUrl:
          "https://lh3.googleusercontent.com/pw/ABLVV85_OueCCncWl5L637xktIH--YuGz1iWr2B0-hSSTApIhiBlpdef8lwU-S01kf0cRexPciwx3ZTabeGjkS5leNgIeQR3HO9o1lDyoPvM0ljiWmQUlKMJBj1963FzF1C4gIwGF3OfrY64m7dRttEgkY4TRYwZ7J4XmJr_l6XAnSV352aW0590vAOGnaXOawFUdRV61jmo7gg4LRbpErTa6qI4HizwKTijhmDruJlMH4F8x47ged6WueIg0SclcBTmHYYXEbBWKcX3KYcAi2qC5Z3a8xF8QGyVtYKHhiijGh1oDiLgCwwfu9ad16EaYXTbJaBOZ3l9rAfqXU_72NGcn8v1zO1lMkK2T2cZevoRlqYChanGK2a03a4X2nzEJTWyreY8lS1iYIWZXFyvaw29L3BMNfmB7WOOi7Bt0ZkJy3QC9SOBiA6mAINl3vcc34ZD1xXtDs_8_d9IjHZ77e3h4uf7MRdlP806YZIlJeNI7axfkE34A3oenIClE_CgcfxPp6A32D_dfLzvEuBVu32DYMlQ87UkaJy36iY3DncrHiHzgc8TgE5hYePPMJUbsBW2NYyoYfgKvVd_GE3aE3Pz3aRcvDg_E8Ax9ImG5rIaxs-pcbjfxamDQUChS6B-0WfqfuYN9WDXXG0Rkyp-CmSnBRy5CIeCTr66XFVIA5XBp6qJ90379Fqs_SJHS3i5uiJWHtUVdCOvcUfUpd1f4T7dxN8lDS2I-kze7dhBB6QGsG10jo_goodImMWW0C71SduIowcOX6Gbnf6jiO4UbAH-PqEaoc4pOkVnsWtnM2bdnLdqSG4ieG6hdk7dMJ9mC9aMvqjKfrBt_p5n-GoL0ZXQ9g716FhdG_dAreYGPrqkYBRUVSppbnyLMj-S7gQ_DoEHQpwCaeVzLAiGWUgNedOQsfea2A=w1118-h1408-s-no-gm?authuser=0",
      },
      {
        name: "Sofia",
        description: "Semanal",
        price: 45.0,
        imageUrl:
          "https://lh3.googleusercontent.com/pw/ABLVV85IDEqXbJKxDRL1NmZ8ohyyKgE_8p_1FP8OE3ydick6eUEawSaOArHgQAFm8wsAkdxKpKoo68OXT9nE3n2hBHgH7iSpOl3zB4jAIwaalCo72p9vWD-Pw13gXbkIPHWm1JiHiBA56QUFcAF9BdyXRk34dovfnjIblO8JGJ4DEilXPpgMRjmV2TfGhdeYgsaL5v42YmBQVEhAFFViZ7dVBGWrN3GwAS0OzZjNg5PDMVi2H34tOs6xESbpQVMtz96Uv0jwg8iFmvP68xLe8ISmCZ6N1y7Dw-EDtn4wkRFi4EVBqn1QXGcJHDMLkfNDMzrdDdIyCOk24WzGcBLiHQpVuui8HfBIvHvhf4tnG6gxQ7oVNJ9g4EkDd2V9juzd-krjahou8mkL5zZUGCiD6bAPbXWHt_zdOOaH8EJAJbGlcD1xwC6r6CoNoJvqyHkpuQLggZYnjmEIbYb3eRFWuOoFT4V0FgRXv6FZyJMqDjXAKE_3zL4VAbIS3-F33jYanW9ShysHctHZG5slymUyEje0f7jrVbTRIFbBGnsJQUA_LJXbBfnT3z5XOOF-O5otdSUD4ukH0hBXvq16sZKK1E63pqxay4SACTGwkw5V4rjirRoJrvNFt_FVjy-lD9jDyxfWR_h6ZgAtEyABkSmz1dATCCk-8cajPtBgQ_RkV65B1m-sMSCt3dJXzYoIHy0AfXwtgAkBiWg81vHrojbtpLudCRmsSg3Mb2F2i9gVZ3pHXytrLQDPXr4DyrtGV4VmzA_T0PlHDPbbZ7sSPof6Uilt08i9d5SrOW0QQ5CcGXmHDRbR2TPVL05ZYdJWnXlqiPwUlGf81sNLfjEQRkZdz0LRDttEeoCCfw1UxzEvJBEJVfsXhZ-iRC40ERIM3kI2ZjjwaZmWRGIVM21ssGh5-MEo3Yq4mw=w938-h1408-s-no-gm?authuser=0",
      },
    ];

    // Criar 10 barbearias com nomes e endereços fictícios
    const barbershops = [];
    for (let i = 0; i < 5; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const imageUrl = images[i];

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
        },
      });

      for (const service of services) {
        await prisma.service.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            barbershop: {
              connect: {
                id: barbershop.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        });
      }

      barbershops.push(barbershop);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar as barbearias:", error);
  }
}

seedDatabase();