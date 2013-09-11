desc "Deploy the site to S3"
task :deploy do
  system("s3cmd --config ~/.s3cfg-stretchcon sync www/* s3://stretchcon.com/ --verbose")
end
