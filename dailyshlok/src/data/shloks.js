const shloks = [
    {
      id: 1,
      verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
      meaning: "You have the right to perform your actions, but you are not entitled to the fruits of your actions."
    },
    {
      id: 2,
      verse: "योगस्थः कुरु कर्माणि संगं त्यक्त्वा धनंजय।",
      meaning: "Perform your duty equipoised, abandoning all attachment to success or failure."
    },
    {
      id: 3,
      verse: "विद्या विनय संपन्ने ब्राह्मणे गवि हस्तिनि।",
      meaning: "A humble sage, whether seeing a learned and gentle Brahmana, a cow, an elephant, or a dog, sees with equal vision."
    },
    {
      id : 4 ,
      verse : "यत्र योगेश्वर: कृष्णो यत्र पाथ􀈾 धनुधर्र: । तत्र श्री􀍪वर्जयो भू􀇓तध्रुर्वा नी􀇓तमर्􀇓तमर्म ॥ ७८ ॥",
      meaning : "Wherever there is Kṛṣṇa, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion."
    },
    {
      id : 5 ,
      verse : "य इदंपरमं गुह्यंमद्भ क्तेष्व􀍧भधास्य􀇓त । भिक्तंम􀇓य परांकृत्वा मामेवैष्यत्यसंशय: ॥ ६८ ॥",
      meaning : "For one who explains this supreme secret to the devotees, pure devotional service is guaranteed, and at the end he will come back to Me."
    },
    {
      id : 6 ,
      verse : "सवर्धमार्न्प􀇐रत्यज्य मामेकं शरणं व्रज । अहंत्वांसवर्पापेभ्यो मो􀂢􀇓यष्या􀍧म मा श ◌ुच: ॥ ६६ ॥",
      meaning : "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."
    },
    {
      id : 7 ,
      verse : "मन्मना भव मद्भ क्तो मद्याजी मां नमस्कुरु । मामेवैष्य􀍧स सत्यंतेप्र􀇓तजाने 􀍪प्रयोऽ􀍧स मे ॥ ६५ ॥",
      meaning : "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend."
    },
    {
      id : 8 ,
      verse : "ईश्वर: सवर्भूतानां हृद्देशेऽजुर्न 􀇓तष्ठ􀇓त । भ्रामयन्सवर्भूता􀇓न यन् त्रारूढा􀇓न मायया ॥ ६१ ॥",
      meaning : "The Supreme Lord is situated in everyone’s heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy"
      
    },
    {
      id : 9 ,
      verse : "मच्च ि◌त्त: सवर्दुगार्􀍨ण मत्प्रसादात्त􀇐रष्य􀍧स । अथ चेत्त्वमहङ्कारान्न श्रोष्य􀍧स 􀍪वनङ् 􀃪य􀍧स ॥ ५८ ॥",
      meaning : "If you become conscious of Me, you will pass over all the obstacles of conditioned life by My grace. If, however, you do not work in such consciousness but act through false ego, not hearing Me, you will be lost"
    },
    {
      id : 10 ,
      verse : "भक्त्य ◌ामाम􀍧भजाना􀇓त यावान्यश्चािस्म तत्त्वत: । ततो मां तत्त्वतो 􀂣ात्वा 􀍪वशतेतदनन्तरम्॥ ५५ ॥",
      meaning : "One can understand Me as I am, as the Supreme Personality of Godhead, only by devotional service. And when one is in full consciousness of Me by such devotion, he can enter into the kingdom of God."
    },
    {
      id : 11 ,
      verse : "ब्रह्मभूत: प्रसन्नात्मा न शोच􀇓त न काङ्􀂢􀇓त । सम: सव􀈶षु भूतेषु मद्भ िक्तंलभते पराम्॥ ५४ ॥",
      meaning : "One who is thus transcendentally situated at once realizes the Supreme Brahman and becomes fully joyful. He never laments or desires to have anything. He is equally disposed toward every living entity. In that state he attains pure devotional service unto Me."
    },
    {
      id : 12 ,
      verse : "शमो दमस्तप: शौचं􀂢ािन्तराजर्वमेव च । 􀂣ानं􀍪व􀂣ानमािस्तक्यंब्रह्मकमर् स्वभावजम्॥ ४२ ॥",
      meaning : "Peacefulness, self-control, austerity, purity, tolerance, honesty, knowledge, wisdom and religiousness – these are the natural qualities by which the brāhmaṇas work."
    },
    {
      id : 13 ,
      verse : "यो मामेवमसम्मूढो जाना􀇓त पुरुषोत्तमम्। स सवर्􀍪वद्भ ज􀇓त मां सवर्भावेन भारत ॥ १९ ॥",
      meaning : "Whoever knows Me as the Supreme Personality of Godhead, without doubting, is the knower of everything. He therefore engages himself in full devotional service to Me, O son of Bharata."
    },
    {
      id : 14 ,
      verse : "सवर्स्य चाहंहृ􀇑द सिन्न􀍪वष्टो मत्त: स्मृ􀇓त􀂣ार्नमपोहनंच । वेदैश्च सव􀈷रहमेव वेद्यो वेदान्तकृद्वेद􀍪वदेव चाहम्॥ १५ ॥",
      meaning : "I am seated in everyone’s heart, and from Me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed, I am the compiler of Vedānta, and I am the knower of the Vedas."
    },
    {
      id : 15 ,
      verse : "ममैवांशो जीवलोके जीवभूत: सनातन: । मन:षष्ठानीिन्द्रया􀍨ण प्रकृ􀇓तस्था􀇓न कषर्􀇓त ॥ ७ ॥",
      meaning : "The living entities in this conditioned world are My eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind."
    },
    {
      id : 16 ,
      verse : "न तद्भ ◌ासयते सूय􀈾 न शशाङ्को न पावक: । यद्ग त्वा न 􀇓नवतर्न्ते तद्धाम परमं मम ॥ ६ ॥",
      meaning : "That supreme abode of Mine is not illumined by the sun or moon, nor by fire or electricity. Those who reach it never return to this material world."
    },
    {
      id : 17 ,
      verse : "􀇓नमार्नमोहा िजतसङ्गदोषा अध्यात्म􀇓नत्या 􀍪व􀇓नवृत्तकामा: । द्वन्द्वै􀍪वर्मुक्ता: सुखदु:खसं􀂣ै- गर्च्छन्त्यमूढा: पदमव्ययंतत्॥ ५ ॥",
      meaning : "Those who are free from false prestige, illusion and false association, who understand the eternal, who are done with material lust, who are freed from the dualities of happiness and distress, and who, unbewildered, know how to surrender unto the Supreme Person attain to that eternal kingdom."
    },
    {
      id : 18 ,
      verse : "ब्रह्मणो 􀇑ह प्र􀇓तष्ठाहममृतस्याव्ययस्य च । शाश्वतस्य च धमर्स्य सुखस्यैकािन्तकस्य च ॥ २७ ॥",
      meaning : "And I am the basis of the impersonal Brahman, which is immortal, imperishable and eternal and is the constitutional position of ultimate happiness."
    },
    {
      id : 19 ,
      verse : "मां च योऽव्य􀍧भचारेण भिक्तयोगेन सेवते । स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते ॥ २६ ॥",
      meaning : "One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature and thus comes to the level of Brahman."
    },
    {
      id : 20 ,
      verse : "सवर्यो􀇓नषु कौन्तेय मूतर्य: सम्भविन्त या: । तासांब्रह्म महद्यो􀇓नरहं बीजप्रद: 􀍪पता ॥ ४ ॥",
      meaning : "It should be understood that all species of life, O son of Kuntī, are made possible by birth in this material nature, and that I am the seed-giving father."
    },
    {
      id : 21 ,
      verse : "अभ्यासेऽप्यसमथ􀈾ऽ􀍧स मत्कमर्परमो भव । मदथर्म􀍪प कमार्􀍨ण कुवर्िन्स􀍪द्धमवाप्स्य􀍧स ॥ १० ॥",
      meaning : "If you cannot practice the regulations of bhakti-yoga, then just try to work for Me, because by working for Me you will come to the perfect stage."
    },
    {
      id : 22 ,
      verse : "अथ 􀍬चत्तंसमाधातुं न शक्न ◌ो􀍪षम􀇓य िस्थरम्। अभ्यासयोगेन ततो मा􀍧मच्छाप् तुं धनञ्जय ॥ ९ ॥",
      meaning : "My dear Arjuna, O winner of wealth, if you cannot fix your mind upon Me without deviation, then follow the regulative principles of bhakti-yoga. In this way develop a desire to attain Me."
    },
    {
      id : 23 ,
      verse : "मय्येव मन आधत्स्व म􀇓य बु􀍪द्धं 􀇓नवेशय । 􀇓नव􀍧सष्य􀍧स मय्येव अत ऊध्व􀉍 न संशय: ॥ ८ ॥",
      meaning : "Just fix your mind upon Me, the Supreme Personality of Godhead, and engage all your intelligence in Me. Thus you will live in Me always, without a doubt."
    },
    
      {
        "id": 24,
        "verse": "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥",
        "meaning": "On the field of dharma, at Kurukshetra, assembled and eager for battle, what did my sons and the sons of Pandu do, O Sanjaya?"
      },
      {
        "id": 25,
        "verse": "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।\nन चैव न भविष्यामः सर्वे वयमतः परम्॥",
        "meaning": "Never was there a time when I did not exist, nor you, nor these kings; nor in the future shall any of us cease to be."
      },
      {
        "id": 26,
        "verse": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
        "meaning": "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty."
      },
      
        {
          "id": 27,
          "verse": "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥",
          "meaning": "Weapons cannot cut the soul, fire cannot burn it, water cannot wet it, and wind cannot dry it."
        },
        {
          "id": 28,
          "verse": "वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही॥",
          "meaning": "Just as a person discards worn-out clothes and puts on new ones, the soul discards old bodies and enters new ones."
        },
        {
          "id": 29,
          "verse": "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
          "meaning": "The soul is neither born nor does it die; it is eternal, indestructible, and timeless. It is not slain when the body is slain."
        },
        {
          "id": 30,
          "verse": "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्संजायते कामः कामात्क्रोधोऽभिजायते॥",
          "meaning": "While contemplating the objects of the senses, a person develops attachment; from attachment arises desire, and from desire arises anger."
        },
        {
          "id": 31,
          "verse": "क्रोधाद्भवति संमोहः संमोहात्स्मृतिविभ्रमः।\nस्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
          "meaning": "From anger arises delusion; from delusion, confusion of memory; from confusion of memory, loss of intelligence; and from loss of intelligence, one perishes."
        },
        {
          "id": 32,
          "verse": "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
          "meaning": "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest myself on earth."
        },
        {
          "id": 33,
          "verse": "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
          "meaning": "To protect the righteous, to annihilate the wicked, and to reestablish the principles of dharma, I appear millennium after millennium."
        },
        {
          "id": 34,
          "verse": "विद्या विनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥",
          "meaning": "The wise see with equal vision a learned and humble Brahmana, a cow, an elephant, a dog, and a dog-eater."
        },
        {
          "id": 35,
          "verse": "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
          "meaning": "One should elevate oneself by one's own mind, not degrade oneself. The mind is the friend of the conditioned soul, and its enemy as well."
        },
        {
          "id": 36,
          "verse": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
          "meaning": "Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions; do not fear."
        },
        {
          "id": 37,
          "verse": "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
          "meaning": "Do not yield to unmanliness, O Partha. It does not befit you. Give up such petty weakness of heart and arise, O scorcher of enemies."
        },
        {
          "id": 38,
          "verse": "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥",
          "meaning": "Treating pleasure and pain, gain and loss, and victory and defeat as the same, prepare for battle. Thus you will not incur sin."
        },
        {
          "id": 39,
          "verse": "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।\nन चैव न भविष्यामः सर्वे वयमतः परम्॥",
          "meaning": "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be."
        },
        {
          "id": 40,
          "verse": "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥",
          "meaning": "Indeed, no one can remain inactive even for a moment. Everyone is helplessly driven to action by the modes of material nature."
        },
        {
          "id": 41,
          "verse": "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः।\nतदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर॥",
          "meaning": "Work done as a sacrifice for Vishnu has to be performed; otherwise, work causes bondage in this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction, and in that way, you will always remain free from bondage."
        },
          {
            "id": 42,
            "verse": "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
            "meaning": "The soul is neither born nor does it ever die. It has always existed and will continue to exist. It is eternal, beyond birth and death."
          },
          {
            "id": 43,
            "verse": "विद्या विनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥",
            "meaning": "A wise person sees all beings as equal—whether it be a learned scholar, a cow, an elephant, a dog, or an outcast."
          },
          {
            "id": 44,
            "verse": "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
            "meaning": "Whenever righteousness declines and unrighteousness rises, I manifest myself to restore balance and uphold dharma."
          },
          {
            "id": 45,
            "verse": "ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः।\nजघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः॥",
            "meaning": "Those who live in the mode of goodness ascend to higher states, those in passion remain in the middle, while those in ignorance fall into lower states."
          },
          {
            "id": 46,
            "verse": "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति।\nशुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः॥",
            "meaning": "One who neither rejoices nor hates, neither grieves nor desires, and who is detached from both good and bad actions is dear to Me."
          },
          {
            "id": 47,
            "verse": "आत्मानं रथिनं विद्धि शरीरं रथमेव तु।\nबुद्धिं तु सारथिं विद्धि मनः प्रग्रहमेव च॥",
            "meaning": "The soul is the passenger, the body is the chariot, the intellect is the charioteer, and the mind is the reins."
          },
          {
            "id": 48,
            "verse": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
            "meaning": "Abandon all material notions of duty and surrender fully to Me. I will deliver you from all sins. Do not fear."
          },
          {
            "id": 49,
            "verse": "सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च।\nवेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥",
            "meaning": "I am seated in everyone's heart, and from Me come remembrance, knowledge, and forgetfulness. I am to be known by all the Vedas; indeed, I am the compiler of Vedanta, and I am the knower of the Vedas."
          },
          {
            "id": 50,
            "verse": "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते।\nइति मत्वा भजन्ते मां बुधा भावसमन्विताः॥",
            "meaning": "I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who know this engage in My devotional service and worship Me with all their hearts."
          },
          {
            "id": 51,
            "verse": "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
            "meaning": "Whatever action a great man performs, common men follow. And whatever standards he sets by exemplary acts, all the world pursues."
          },
          {
            "id": 52,
            "verse": "हतो वा प्राप्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम्।\nतस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः॥",
            "meaning": "If you are slain, you will attain heaven; if you conquer, you will enjoy the kingdom on earth. Therefore, arise, O son of Kunti, and be determined to fight."
          },
          {
            "id": 53,
            "verse": "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।\nन चैव न भविष्यामः सर्वे वयमतः परम्॥",
            "meaning": "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be."
          },
          {
            "id": 54,
            "verse": "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥",
            "meaning": "Indeed, no one can remain inactive even for a moment. Everyone is helplessly driven to action by the modes of material nature."
          },
          {
            "id": 55,
            "verse": "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः।\nतदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर॥",
            "meaning": "Work done as a sacrifice for Vishnu has to be performed; otherwise, work causes bondage in this material world. Therefore, O son of Kunti, perform your prescribed duties for His satisfaction, and in that way, you will always remain free from bondage."
          },
            {
              "id": 56,
              "verse": "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
              "meaning": "To those who are constantly devoted and who worship Me with love, I give the understanding by which they can come to Me."
            },
            {
              "id": 57,
              "verse": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
              "meaning": "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions."
            },
            {
              "id": 58,
              "verse": "समान्पश्यन्हि सर्वत्र समवस्थितमीश्वरम्।\nन हिनस्त्यात्मनात्मानं ततो याति परां गतिम्॥",
              "meaning": "He who sees the Supreme Lord equally present in all beings never degrades himself by his mind. Thus he approaches the transcendental destination."
            },
            {
              "id": 59,
              "verse": "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥",
              "meaning": "All actions are performed by the modes of nature, but one who is deluded by ego thinks himself the doer."
            },
            {
              "id": 60,
              "verse": "श्रीभगवानुवाच:\nइदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते।\nएतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः॥",
              "meaning": "This body, O son of Kunti, is called the field, and one who knows this field is called the knower of the field."
            },
            {
              "id": 61,
              "verse": "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते।\nअनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते॥",
              "meaning": "I shall now explain the knowable, knowing which you will taste the eternal. It is beginningless and is said to be beyond existence and nonexistence."
            },
            {
              "id": 62,
              "verse": "मनःप्रशान्तस्येन्मोक्षः।\nबुद्ध्या विशुद्धया युक्तो धृत्यात्मानं नियम्य च।",
              "meaning": "With a pure intellect, controlled self, and mind pacified, one achieves liberation by renouncing desires."
            },
            {
              "id": 63,
              "verse": "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥",
              "meaning": "There are three gates leading to hell—lust, anger, and greed. Every sane person should give these up."
            },
            {
              "id": 64,
              "verse": "स्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
              "meaning": "It is better to fail in one’s own duty than to succeed in the duty of another."
            },
            {
              "id": 65,
              "verse": "सञ्जय उवाच:\nएतच्छ्रुत्वा वचनं केशवस्य\nकृताञ्जलिर्वेपमानः किरीटी।\nनमस्कृत्वा भूय एवाह कृष्णं\nसगद्गदं भीतभीतः प्रणम्य॥",
              "meaning": "Hearing Krishna’s words, Arjuna trembled, bowed down, and with folded hands, fearfully addressed Him again."
            },
            {
              "id": 66,
              "verse": "अर्जुन उवाच:\nस्मरं स्मरं च मे मनः।\nयत्तत्सर्वमिदं मम॥",
              "meaning": "Remembering again and again Your glory, my mind is overwhelmed, O Lord!"
            },
            {
              "id": 67,
              "verse": "न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः।\nसत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रिभिर्गुणैः॥",
              "meaning": "There is no being on earth or in the higher celestial realms that is free from the influence of the three gunas of nature."
            },
            {
              "id": 68,
              "verse": "शमो दमस्तपः शौचं क्षान्तिरार्जवमेव च।\nज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम्॥",
              "meaning": "Peacefulness, self-control, austerity, purity, tolerance, honesty, knowledge, wisdom, and religiousness—these are the natural qualities of a Brahmin."
            },
            {
              "id": 69,
              "verse": "श्रीभगवानुवाच:\nइष्टं तेऽहं विधास्यामि समग्रं यथाश्रयम्।\nज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्॥",
              "meaning": "I shall now declare unto you in full this knowledge combined with realization, knowing which you shall be liberated from misery."
            },
            {
              "id": 70,
              "verse": "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
              "meaning": "There is nothing superior to Me, O Arjuna. Everything rests upon Me, as pearls are strung on a thread."
            },
            {
              "id": 71,
              "verse": "अपि चेत्सुदुराचारो भजते मामनन्यभाक्।\nसाधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः॥",
              "meaning": "Even if the most sinful worships Me with unwavering devotion, he is to be considered righteous, for he has made the proper resolve."
            },
            {
              "id": 72,
              "verse": "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम्।\nददामि बुद्धियोगं तं येन मामुपयान्ति ते॥",
              "meaning": "To those who are devoted to Me and who worship Me with love, I give the intelligence by which they can come to Me."
            },
            {
              "id": 73,
              "verse": "न मे विद्यते तस्मिन्न्यः शाश्वतस्य च यत्स्थितिः।",
              "meaning": "My nature is not revealed to all; I am eternal and hidden by My divine illusion."
            },
            {
              "id": 74,
              "verse": "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना।\nमत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः॥",
              "meaning": "I pervade this entire universe in My unmanifest form. All beings are in Me, but I am not in them."
            },
            {
              "id": 75,
              "verse": "नान्तोऽस्ति मम दिव्यानां विभूतीनां परन्तप।\nएष तूद्देशतः प्रोक्तो विभूतेर्विस्तरो मया॥",
              "meaning": "There is no end to My divine manifestations. What I have spoken to you is but a mere indication of My infinite opulences."
            }
          ]
          
         
        
       
      
    
    
  ;
  
  export default shloks;
  