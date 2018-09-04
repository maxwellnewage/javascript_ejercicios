function readQuest(questId) {
    var quest = quests[questId];
    var questText = "";
    var optIds = [];
    var optCorrect = false;

    if (quest) {
        // condicion de derrota
        if (quest.id === 0) {
            alert(quest.desc);
            return;
        }

        // condicion de victoria
        if (quest.options.length === 0) {
            alert(quest.desc);
            return;
        }

        // Texto de la Quest
        questText += quest.desc + "\n\n";

        for (var i = 0; i < quest.options.length; i++) {
            // Texto de las opt de la Quest
            questText += quest.options[i].questId + " " + quest.options[i].desc + "\n";

            // Si la opt es 0, entonces perdió
            if (quest.options[i].questId === 0) {
                alert(quest.desc);
                return readQuest(quest.options[i].questId);
            }

            optIds.push(quest.options[i].questId);
        }

        // Se muestra la Quest
        var res = parseInt(prompt(questText));

        /* Se evalúa si la opcion es valida
         * Si es valida, se pasa el id quest nuevo
         * Si es invalida, se pasa el id quest inicial
         */
        for (var e = 0; e < optIds.length; e++) {
            if (res === optIds[e]) {
                optCorrect = true;
                break;
            }
        }


        if (optCorrect)
            return readQuest(res);
        else
            return readQuest(questId);

    } else {
        return "Quest no valida!";
    }
}

readQuest(1);