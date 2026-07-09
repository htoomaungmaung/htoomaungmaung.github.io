source "https://rubygems.org"

# GitHub Pages gemspec - pinned to safe versions addressing Dependabot alerts
# GitHub Pages compatibility: https://pages.github.com/versions/
gem "github-pages", "~> 230", group: :jekyll_plugins

# Optional: enable the_cache
# gem "jekyll-remote-theme"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :x64_mingw, :mswin]

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]

# Lock http_parser.rb to address ReDoS vulnerability (CVE-2024-41123)
gem "http_parser.rb", "~> 0.8.0"

# Lock racc to address use-after-free vulnerability (CVE-2024-44938)
gem "racc", "~> 1.7"
