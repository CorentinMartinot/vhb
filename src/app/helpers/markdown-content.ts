export class MarkdownContent {
    static acuteHepatitisB = `
    **Résultat sérologique compatible avec une hépatite B aiguë.**
  
    Chez > 90 % des patients adultes : évolution vers la guérison.
    
    &nbsp;
    **Risques :**
    
    1. hépatite B chronique (persistance Ag HbS + à 6mois)
    2. hépatite B aiguë sévère ou fulminante :
    Compléter rapidement le bilan sanguin : 
     * NFS, plaquettes
     * ionogramme, créatininémie
     * TP, INR
     * bilan hépatique complet : ASAT/ALAT, PAL/GGT, bilirubine totale et conjuguée
     * albuminémie
     * protéinurie sur échantillon
     * sérologies VIH,VHC, VHD, VHA
     * dosage quantitatif Ag HbS, charge virale VHB quantitative, Ag HBE et anticorps anti HBE
     * examens para cliniques : échographie hépatique
     * dépistage de l'entourage ++++ et vaccination
    
    &nbsp;
    Si cytolyse, hyperbilirubinémie ou TP abaissé : surveillance biologique rapprochée du patient.
    
    &nbsp;
    Si diminution du TP < 50 % ou signe d'encéphalopathie hépatique : hépatite aiguë sévère ; à adresser à un centre de transplantation hépatique et début d'un traitement par analogues dès que possible
    `;

    // Medical Management details

    static pregnant = `
    * Il est recommandé de réaliser une recherche d'antigène HbS dès le premier trimestre de grossesse et obligatoire en France de le rechercher au 6ème mois.
    * si sérologie B positive chez la mère, réaliser l'ensemble du bilan de première intention
    * si patiente déjà traitée par Tenofovir, poursuivre le traitement. Si autre analogue, switch pour Tenofovir /!\\ interféron pégylé contre indiqué pendant la grossesse +++
    * si découverte récente chez patiente voulant être enceinte prochainement SANS FIBROSE, retarder le traitement
    * si le taux D'ADN VHB > 200.000 IU/mL ou HBsAg > 4 log10 IU/ml, commencer un traitement par Ténofovir entre la 24 et 48ème semaine de grossesse et continuer 12 semaines après l'accouchement.
    * schéma chez le nouveau-né : 3 doses de vaccin. 1 dose à la naissance (dans les 12h) associée à l'administration d'immunoglobulines spécifiques, puis à 1 mois et 6 mois.
    * pas de contre-indication à l'allaitement avec ou sans traitement
    * ne pas oublier d'arrêter ensuite le ténofovir chez la mère si pas d'indication après les 12 semaines (se référer à la prise en chrage sans situtation particulière)
    `;

    static coVIH = `
    Beaucoup de trithérapies comportent un antiviral actif sur l'hépatite B. Vérifier que c'est le cas.
    &nbsp;
    /!\ ne pas oublier le dépistage du CHC chez les patients à risque :

    Il faudrait mettre un calculateur du score PAGE B (en annexe à la fin) 

    et si score > ou = à 10 : - échogrpahie abdominale avec doppler et dosage de l'alpha foetoprotéine tous les 6 mois.
    `;

    static coVHC = `
    Situation complexe : patient à adresser en consultation d'hépatologie.
    - Si patient traité par analogues : pas d'interaction avec les agents antiviraux directs.
    - Risque pour la fonction rénale si ténofovir et sofosbuvir, à surveiller Risque de réactivation virale B (élévation modérée de la charge virale VHB ou cytolyse) pendant le traitement de l'hépatite C si Ag HbS + ou Ac anti-HbC isolé : recommandations = surveillance ADN du VHB et transaminases pendant le traitement par agent antiviral direct
    - Si suspicion de réactivation virale B sous traitement VHC : avis spécialisé
    `

    static coVHD = `
    Situation complexe : patient à adresser en consultation d'hépatologie.
    * traitements possibles : interféron pegylé alpha si pas de contre indication ou bulévirtide acétate (si indication)
    * discuter un traitement par analogues si réplication virale VHB persistante
    - méthodes non invasives (fibroscan, fibrotest, fibromètre...) non validées dans l'hépatite delta /!\\
    `

    static careStaff = `
    Si personnel réalisant des gestes à risque de transmission ET taux D'ADN VHB > 200 IU/mL (seuil EASL), indication à un traitement par analogue pour réduire le risque de transmission.
    &nbsp;
    En France, seuil = 10000UI/ml
    `;
    
    static familyHistoryOfCirrhosis = `
    Indication à un traitement par analogues et un dépistage par échographie abdoinale avec doppler + dosage de l'alpha- foetoprotéine tous les 6 mois.
    `;

    static extrahepaticHbv = `
    Indication à un traitement par analogues.
    `;

    static cirrhose = `
    * Indication à un traitement par analogues.
    * Suivi tous les 6 mois : 
    * Échogrpahie abdominale avec doppler + dosage de l'alphafoetoprotéine
    * Surveillance de la fonction hépatique et de la fonction rénale

    `;
  }
  