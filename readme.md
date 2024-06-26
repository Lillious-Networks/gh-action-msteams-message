# Microsoft Teams Message Action

This action sends a message to a Microsoft Teams channel

## Inputs

### `title`

**Required** The title of the message.

### `subtitle`

The subtitle of the message. Default `" "`.

### `color`

The color of the message. Default `"#000000"`.

### `message`

**Required** The message to send.

### `webhook`:

**Required** The webhook URL to send the message to.

## Example usage

```yaml
uses: actions/gh-action-msteams-message@v1.0.0
with:
  title: 'Build & Release'
  subtitle: 'Product Version: v1.0.2'
  color: '#000000'
  message: 'Successfully built and released Product using version v.1.0.2'
  webhook: '${{ secrets.msteams_webhook }}'
```