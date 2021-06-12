
/**
 * Clear existing entries and seed comments table.
 *
 * @param {Object} knex
 * @returns {Promise}
 */
 exports.seed = function(knex) {
  return knex('comments')
    .del()
    .then(function () {
      return knex('comments').insert([
        {
          "comment": "Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt",
          "user": "1",
          "post": "1"
        },
        {
          "comment": "Tempus curabitur faucibus auctor bibendum duis gravida tincidunt litora himenaeos facilisis vivamus vehicula potenti semper fusce suspendisse sagittis!",
          "user": "1",
          "post": "1"
        },
        {
          "comment": "Convallis turpis porttitor sapien ad urna efficitur dui vivamus in praesent nulla hac non potenti!",
          "user": "1",
          "post": "2"
        },
        {
          "comment": "Habitasse scelerisque class quam primis convallis integer eros congue nulla proin nam faucibus parturient.",
          "user": "1",
          "post": "2"
        },
        {
          "comment": "Cras consequat fames faucibus ac aliquam dolor a euismod porttitor rhoncus venenatis himenaeos montes tristique pretium libero nisi!",
          "user": "2",
          "post": "1"
        },
        {
          "comment": "Laoreet justo volutpat per etiam donec at augue penatibus eu facilisis lorem phasellus ipsum tristique urna quam platea.",
          "user": "2",
          "post": "1"
        },
        {
          "comment": "Senectus lectus eleifend ex lobortis cras nam cursus accumsan tellus lacus faucibus himenaeos posuere!",
          "user": "2",
          "post": "2"
        },
        {
          "comment": "Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!",
          "user": "2",
          "post": "2"
        },
        {
          "comment": "Pretium vel inceptos fringilla sit dui fusce varius gravida platea morbi semper erat elit porttitor potenti!",
          "user": "3",
          "post": "3"
        },
        {
          "comment": "Ex a bibendum quis volutpat consequat euismod vulputate parturient laoreet diam sagittis amet at blandit.",
          "user": "3",
          "post": "3"
        },
        {
          "comment": "Auctor euismod interdum augue tristique senectus nascetur cras justo eleifend mattis libero id adipiscing amet placerat",
          "user": "4",
          "post": "4"
        },
        {
          "comment": "A facilisi justo ornare magnis velit diam dictumst parturient arcu nullam rhoncus nec!",
          "user": "4",
          "post": "4"
        },
        {
          "comment": "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
          "user": "5",
          "post": "5"
        },
        {
          "comment": "Porttitor ullamcorper rutrum semper proin mus felis varius convallis conubia nisl erat lectus eget.",
          "user": "5",
          "post": "5"
        },
        {
          "comment": "Semper blandit felis nostra facilisi sodales pulvinar habitasse diam sapien lobortis urna nunc ipsum orci.",
          "user": "6",
          "post": "6"
        },
        {
          "comment": "Neque amet vel integer placerat ex pretium elementum vitae quis ullamcorper nullam nunc habitant cursus justo!!!",
          "user": "6",
          "post": "2"
        },
        {
          "comment": "Sollicitudin sagittis ex ut fringilla enim condimentum et netus tristique.",
          "user": "5",
          "post": "3"
        },
        {
          "comment": "Semper tempus curae at platea lobortis ullamcorper curabitur luctus maecenas nisl laoreet!",
          "user": "6",
          "post": "4"
        },
        {
          "comment": "Arcu adipiscing lobortis sem finibus consequat ac justo nisi pharetra ultricies facilisi!",
          "user": "7",
          "post": "1"
        }
      ]);
    });
};
