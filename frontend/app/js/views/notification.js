exercism.views.Notification = Backbone.View.extend({
  template: JST["app/templates/notification.us"],

  tagName: "li",

  className: "notification message",

  events: {
    "click": "toggleRead"
  },

  initialize: function(options) {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.readStatus();
    return this;
  },

  toggleRead: function() {
    if(!(this.model.get("read"))) {
      this.model.save("read", true);
    }
  },

  readStatus: function() {
    this.$el.toggleClass("new-notification", !(this.model.get("read")));
  },
});
