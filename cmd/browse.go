// Copyright © 2018 Kevin Nguyen kvn219@nyu.edu
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package cmd

import (
	"fmt"

	"github.com/kvn219/git-trends/ght"
	"github.com/spf13/cobra"
)

// browseCmd represents the browse command
var browseCmd = &cobra.Command{
	Use:   "browse",
	Short: "Browse a list of popular github repos from the command line and explore it in the browser.",
	Long:  ``,
	Args:  cobra.NoArgs,
	Run:   addBrowse,
}

func init() {
	rootCmd.AddCommand(browseCmd)
}

func addBrowse(*cobra.Command, []string) {
	params := ght.GenerateQueryParams()
	output, resp := ght.RequestRepos(params)
	fmt.Println(resp.Request.URL)
	results := ght.ParseRepositories(output)
	ght.BrowseRepos(results)
}
