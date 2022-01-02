const { //// # DEVELOPED BY MAVERA.
    Client, //// # DEVELOPED BY MAVERA.
    MessageEmbed, //// # DEVELOPED BY MAVERA.
    MessageActionRow, //// # DEVELOPED BY MAVERA.
    MessageButton, //// # DEVELOPED BY MAVERA.
    MessageCollector, //// # DEVELOPED BY MAVERA.
    MessageComponentInteraction, //// # DEVELOPED BY MAVERA.
    MessageSelectMenu, //// # DEVELOPED BY MAVERA.
    SelectMenuInteraction, //// # DEVELOPED BY MAVERA.
    Intents //// # DEVELOPED BY MAVERA.
} = require("discord.js") //// # DEVELOPED BY MAVERA.
const { TOKEN, PREFIX, READY, BUTTON, ROLE } = require("./settings.json") //// # DEVELOPED BY MAVERA.
const client = new Client({ //// # DEVELOPED BY MAVERA.
    intents: [ //// # DEVELOPED BY MAVERA.
        Intents.FLAGS.GUILDS, //// # DEVELOPED BY MAVERA.
        Intents.FLAGS.GUILD_MESSAGES, //// # DEVELOPED BY MAVERA.
        Intents.FLAGS.GUILD_INTEGRATIONS //// # DEVELOPED BY MAVERA.
    ], //// # DEVELOPED BY MAVERA.
    presence: { //// # DEVELOPED BY MAVERA.
        activities: [{ //// # DEVELOPED BY MAVERA.
            name: READY //// # DEVELOPED BY MAVERA.
        }], //// # DEVELOPED BY MAVERA.
        status: "dnd" //// # DEVELOPED BY MAVERA.
    }, //// # DEVELOPED BY MAVERA.
    restTimeOffset: 60 //// # DEVELOPED BY MAVERA.
}) //// # DEVELOPED BY MAVERA.
const { Slash } = require("discord-slash-commands") //// # DEVELOPED BY MAVERA.
const slash = new Slash(client) //// # DEVELOPED BY MAVERA.

// slash command create #
client.on("ready", () => { //// # DEVELOPED BY MAVERA.
    slash.command({ //// # DEVELOPED BY MAVERA.
        guildOnly: true, //// # DEVELOPED BY MAVERA.
        guildID: "926064333044215848", //// # DEVELOPED BY MAVERA.
        data: { //// # DEVELOPED BY MAVERA.
            name: "mavera", //// # DEVELOPED BY MAVERA.
            description: "Developed By Mavera. | github.com/Maveracim", //// # DEVELOPED BY MAVERA.
            type: 4, //// # DEVELOPED BY MAVERA.
            content: `Bu botun geliştiricisi: <@853164355578888202> (\`mavera dc sildi#0001\` - \`853164355578888202\`) | https://github.com/Maveracim` //// # DEVELOPED BY MAVERA.
        } //// # DEVELOPED BY MAVERA.
    }) //// # DEVELOPED BY MAVERA.
}) //// # DEVELOPED BY MAVERA.
// slash command create #

// interaction files #
client.on("messageCreate", async(msg) => { //// # DEVELOPED BY MAVERA.
    let args = msg.content.trim().split(" ") //// # DEVELOPED BY MAVERA.
    let tadaEmoji = msg.client.emojis.cache.find(x => x.name == "tevfik_tada") //// # DEVELOPED BY MAVERA.
    let giftEmoji = msg.client.emojis.cache.find(x => x.name == "tevfik_star") //// # DEVELOPED BY MAVERA.
    let rolAlEmoji = msg.client.emojis.cache.find(x => x.name == "tevfik_no") //// # DEVELOPED BY MAVERA.
    if(msg.content.includes("mavera")) { //// # DEVELOPED BY MAVERA.
        const actions = new MessageActionRow() //// # DEVELOPED BY MAVERA.
        .addComponents(new MessageSelectMenu() //// # DEVELOPED BY MAVERA.
        .setCustomId("event") //// # DEVELOPED BY MAVERA.
        .setPlaceholder("Etkinlik Rollerini Seç!") // gozukecek //// # DEVELOPED BY MAVERA.
        .addOptions([ //// # DEVELOPED BY MAVERA.
            { //// # DEVELOPED BY MAVERA.
                label: "Çekiliş Katılımcısı", //// # DEVELOPED BY MAVERA.
                value: "çekiliş", //// # DEVELOPED BY MAVERA.
                description: "Sunucudaki çekilişlerden haberdar ol!", //// # DEVELOPED BY MAVERA.
                emoji: tadaEmoji //// # DEVELOPED BY MAVERA.
            }, //// # DEVELOPED BY MAVERA.
            { //// # DEVELOPED BY MAVERA.
                label: "Etkinlik Katılımcısı", // başlık //// # DEVELOPED BY MAVERA.
                value: "etkinlik", // SET ID //// # DEVELOPED BY MAVERA.
                description: "Sunucudaki etkinliklerden haberdar ol!", // acıklama //// # DEVELOPED BY MAVERA.
                emoji: giftEmoji // soldaki emoji  //// # DEVELOPED BY MAVERA.
            }, //// # DEVELOPED BY MAVERA.
            { //// # DEVELOPED BY MAVERA.
                label: "Etkinlik Rollerini Al", //// # DEVELOPED BY MAVERA.
                value: "eventAl", //// # DEVELOPED BY MAVERA.
                description: "Üstündeki event rollerini kaldırmak için tıkla!", //// # DEVELOPED BY MAVERA.
                emoji: rolAlEmoji //// # DEVELOPED BY MAVERA.
            } //// # DEVELOPED BY MAVERA.
        ])) //// # DEVELOPED BY MAVERA.
 //// # DEVELOPED BY MAVERA.
        msg.channel.send({ //// # DEVELOPED BY MAVERA.
            content: `Developed By Mavera.`, //// # DEVELOPED BY MAVERA.
            components: [actions] //// # DEVELOPED BY MAVERA.
        }) //// # DEVELOPED BY MAVERA.
    } //// # DEVELOPED BY MAVERA.
}) //// # DEVELOPED BY MAVERA.
 //// # DEVELOPED BY MAVERA.
client.on("interactionCreate", async(interaction) => { //// # DEVELOPED BY MAVERA.
    let values = interaction.values[0] //// # DEVELOPED BY MAVERA.
    let events = [ //// # DEVELOPED BY MAVERA.
        "çekiliş", //// # DEVELOPED BY MAVERA.
        "etkinlik", //// # DEVELOPED BY MAVERA.
        "eventAl" //// # DEVELOPED BY MAVERA.
    ] //// # DEVELOPED BY MAVERA.
 //// # DEVELOPED BY MAVERA.
    if(events.some((cmd) => values.includes(cmd))) { //// # DEVELOPED BY MAVERA.
        function rolVarsaRemove() { //// # DEVELOPED BY MAVERA.
            interaction.member.roles.cache.forEach(role => { //// # DEVELOPED BY MAVERA.
                BUTTON.ETKCEK.forEach(roles => { //// # DEVELOPED BY MAVERA.
                    role.id === roles ? interaction.member.roles.remove(role.id) : false //// # DEVELOPED BY MAVERA.
                }) //// # DEVELOPED BY MAVERA.
            }) //// # DEVELOPED BY MAVERA.
        } //// # DEVELOPED BY MAVERA.
 //// # DEVELOPED BY MAVERA.
        if(values === "çekiliş") { //// # DEVELOPED BY MAVERA.
            if(interaction.member.roles.cache.get(BUTTON.CEKILIS)) { //// # DEVELOPED BY MAVERA.
                rolVarsaRemove() //// # DEVELOPED BY MAVERA.
                interaction.reply({ //// # DEVELOPED BY MAVERA.
                    content: `<@${interaction.member.id}>, çekiliş rolünü üstünden aldım!`, //// # DEVELOPED BY MAVERA.
                    ephemeral: true //// # DEVELOPED BY MAVERA.
                }) //// # DEVELOPED BY MAVERA.
            } else { //// # DEVELOPED BY MAVERA.
                interaction.member.roles.add(BUTTON.CEKILIS) //// # DEVELOPED BY MAVERA.
                interaction.reply({ //// # DEVELOPED BY MAVERA.
                    content: `<@${interaction.member.id}>, çekiliş rolünü üstüne verdim!`, //// # DEVELOPED BY MAVERA.
                    ephemeral: true //// # DEVELOPED BY MAVERA.
                }) //// # DEVELOPED BY MAVERA.
            } //// # DEVELOPED BY MAVERA.
        } else if(values === "etkinlik") { //// # DEVELOPED BY MAVERA.
            if(interaction.member.roles.cache.get(BUTTON.ETKNLIK)) { //// # DEVELOPED BY MAVERA.
                rolVarsaRemove() //// # DEVELOPED BY MAVERA.
                interaction.reply({ //// # DEVELOPED BY MAVERA.
                    content: `<@${interaction.member.id}>, etkinlik rolünü üstünden aldım!`,  //// # DEVELOPED BY MAVERA.
                    ephemeral: true //// # DEVELOPED BY MAVERA.
                }) //// # DEVELOPED BY MAVERA.
            } else { //// # DEVELOPED BY MAVERA.
                interaction.member.roles.add(BUTTON.ETKNLIK) //// # DEVELOPED BY MAVERA.
                interaction.reply({ //// # DEVELOPED BY MAVERA.
                    content: `<@${interaction.member.id}>, etkinlik rolünü üstüne verdim!`, //// # DEVELOPED BY MAVERA.
                    ephemeral: true //// # DEVELOPED BY MAVERA.
                }) //// # DEVELOPED BY MAVERA.
            } //// # DEVELOPED BY MAVERA.
        } else if(values === "eventAl") { //// # DEVELOPED BY MAVERA.
            if(interaction.member.roles.cache.get(BUTTON.ETKNLIK) || interaction.member.roles.cache.get(BUTTON.CEKILIS) || interaction.member.roles.cache.get(BUTTON.ETKNLIK) && interaction.member.roles.cache.get(BUTTON.CEKILIS)) { //// # DEVELOPED BY MAVERA.
                rolVarsaRemove() //// # DEVELOPED BY MAVERA.
                interaction.reply({ //// # DEVELOPED BY MAVERA.
                    content: `Selam <@${interaction.member.id}>, üstünde bulunan katılımcı rollerini aldım!`, //// # DEVELOPED BY MAVERA.
                    ephemeral: true //// # DEVELOPED BY MAVERA.
                }) //// # DEVELOPED BY MAVERA.
            } else { //// # DEVELOPED BY MAVERA.
                interaction.reply({ //// # DEVELOPED BY MAVERA.
                    content: `<@${interaction.member.id}>, üstünde rol bulunmadığı için bu işlemi gerçekleştiremiyorum.`,  //// # DEVELOPED BY MAVERA.
                    ephemeral: true //// # DEVELOPED BY MAVERA.
                }) //// # DEVELOPED BY MAVERA.
            } //// # DEVELOPED BY MAVERA.
        } //// # DEVELOPED BY MAVERA.
    } //// # DEVELOPED BY MAVERA.
}) //// # DEVELOPED BY MAVERA.
// interaction files #

client.login(TOKEN).then(console.log(`[MAVERA_V13_BUTTON_SYSTEM]: Mavera Bot Login!`)) //// # DEVELOPED BY MAVERA.